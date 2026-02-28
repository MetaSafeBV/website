import { SupportedLocales } from '~vitepress/theme';

export function isSupportedLocale(locale: string): boolean {
	const supported = Object.values(SupportedLocales) as string[];
	return supported.includes(locale.toLowerCase());
}

export function getDefaultLocale(): string {
	return SupportedLocales.EN;
}

export function getValidLocaleForNavigation(locale: string): string {
	if (isSupportedLocale(locale)) {
		return locale;
	}

	if (locale.includes('-')) {
		return locale.split('-')[0];
	}

	return SupportedLocales.EN;
}