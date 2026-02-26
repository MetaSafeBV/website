import { readdirSync, statSync, readFileSync, existsSync } from "node:fs";
import { join } from "node:path";
import type { DefaultTheme } from "vitepress";

interface SidebarOptions {
	locale: string;
	srcDir?: string;
	collapsed?: boolean;
	ignoreList?: string[];
	useFrontmatterTitle?: boolean;
}

interface FileInfo {
	name: string;
	path: string;
	isDirectory: boolean;
	hasIndexMdFile: boolean;
}

function extractTitle(filePath: string): string | null {
	if (!existsSync(filePath)) {
		return null;
	}

	try {
		const content: string = readFileSync(filePath, "utf-8");

		/* Try frontmatter title first */
		const frontmatterMatch: RegExpMatchArray | null = content.match(
			/^---\s*\n([\s\S]*?)\n---/,
		);

		if (frontmatterMatch) {
			const titleMatch = frontmatterMatch[1].match(
				/title:\s*['"]?([^'">\n]+)['"]?/,
			);

			if (titleMatch) {
				return titleMatch[1].trim();
			}
		}

		const h1Match: RegExpMatchArray | null = content.match(/^#\s+(.+)$/m);

		if (h1Match) {
			return h1Match[1].trim();
		}

		return null;
	} catch (error) {
		console.error(error);
		return null;
	}
}

function formatName(name: string): string {
	return (
		name
			// Remove number prefixes like "01-"
			.replace(/^\d+-/, "")
			.replace(/-/g, " ")
			.replace(/\b\w/g, (char) => char.toUpperCase())
	);
}

function getFileInfo(dirPath: string, ignoreList: string[]): FileInfo[] {
	const items: string[] = readdirSync(dirPath);

	const filteredItems = items.filter((item) => {
		return ignoreList.includes(item) ||
			item.startsWith(".") ||
			item.startsWith("_")
			? false
			: true;
	});

	const convertedFileItems: FileInfo[] = filteredItems.map((item) => {
		const fullPath: string = join(dirPath, item);
		const isDirectory: boolean = statSync(fullPath).isDirectory();
		const hasIndexMdFile: boolean =
			isDirectory &&
			(existsSync(join(fullPath, "index.md")) ||
				existsSync(join(fullPath, "index.MD")));

		const fileInfo: FileInfo = {
			name: item,
			path: fullPath,
			isDirectory,
			hasIndexMdFile,
		};

		return fileInfo;
	});

	const sortedFileInfo: FileInfo[] = convertedFileItems.sort((a, b) => {
		if (a.isDirectory && !b.isDirectory) {
			return -1;
		}

		if (!a.isDirectory && b.isDirectory) {
			return 1;
		}

		return a.name.localeCompare(b.name);
	});

	return sortedFileInfo;
}

function buildSidebarItems(
	dirPath: string,
	basePath: string,
	options: SidebarOptions,
): DefaultTheme.SidebarItem[] {
	const items: DefaultTheme.SidebarItem[] = [];
	const fileInfos = getFileInfo(dirPath, options.ignoreList ?? []);

	for (const info of fileInfos) {
		if (info.isDirectory) {
			const relativePath = info.path.replace(basePath, "").replace(/\\/g, "/");
			const indexPath = join(info.path, "index.md");
			const hasIndexMdFile = existsSync(indexPath);

			const text =
				hasIndexMdFile && options.useFrontmatterTitle
					? extractTitle(indexPath)
					: formatName(info.name);

			if (!text) {
				continue;
			}

			const childItems = buildSidebarItems(info.path, basePath, options);

			const sidebarItem: DefaultTheme.SidebarItem = {
				text,
				collapsed: options.collapsed ?? false,
			};

			if (hasIndexMdFile) {
				const linkPath = options.locale
					? `/${options.locale}${relativePath}/`
					: `${relativePath}/`;
				sidebarItem.link = linkPath;
			}

			if (childItems.length > 0) {
				sidebarItem.items = childItems;
			}

			if (hasIndexMdFile || childItems.length > 0) {
				items.push(sidebarItem);
			}
		} else if (
			info.name.endsWith(".md") &&
			info.name.toLowerCase() !== "index.md"
		) {
			// Handle markdown file (skip index.md as it's handled by parent)
			const fileName = info.name.replace(/\.md$/i, "");
			const relativePath = info.path
				.replace(basePath, "")
				.replace(/\\/g, "/")
				.replace(/\.md$/i, "");

			const text =
				(options.useFrontmatterTitle
					? formatName(fileName)
					: extractTitle(info.path)) ?? "";

			if (!text) {
				continue;
			}

			const linkPath = options.locale
				? `/${options.locale}${relativePath}`
				: relativePath;

			items.push({
				text,
				link: linkPath,
			});
		}
	}

	return items;
}

export function generateSidebar(
	options: SidebarOptions,
): DefaultTheme.SidebarItem[] {
	const { locale, srcDir = "src" } = options;
	const localeDir = join(process.cwd(), srcDir, locale);

	if (!existsSync(localeDir)) {
		console.warn(`Locale directory not found: ${localeDir}`);
		return [];
	}

	return buildSidebarItems(localeDir, localeDir, options);
}
