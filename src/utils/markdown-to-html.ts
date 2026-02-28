export const SUBSTITUTION_MAP: [string, string][] = [
	['**', '<strong>$1</strong>'],
	['__', '<strong>$1</strong>'],
	['*', '<em>$1</em>'],
	['_', '<em>$1</em>'],
	['`', '<code>$1</code>'],
];

export function markdownToHtml(markdown: string): string {
	let html = markdown;

	for (const [markdownSyntax, htmlTag] of SUBSTITUTION_MAP) {
		const escaped = markdownSyntax.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
		const regex = new RegExp(`${escaped}(.*?)${escaped}`, 'g');

		html = html.replace(regex, htmlTag);
	}
	return html;
}