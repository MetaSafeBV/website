import { ref, onMounted } from 'vue';
import { useRouter } from 'vitepress';

export function usePageTransition() {
	const router = useRouter();

	const isTransitioning = ref<boolean>(false);

	onMounted(() => {
		if (typeof globalThis.window !== 'undefined') {
			router.onBeforeRouteChange = () => {
				isTransitioning.value = true;
			};

			router.onAfterRouteChange = () => {
				setTimeout(() => {
					isTransitioning.value = false;
				}, 300);
			};
		}
	});

	return {
		isTransitioning,
	};
}