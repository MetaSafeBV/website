export function constructLocaleWithLocaleSegment(locale: string, path: string): string {
	return `/${locale}/${path}`.replaceAll('//', '/');
}