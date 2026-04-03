<template>
	<div class="split-section">
		<div class="split-section-content">
			<slot />
		</div>
	</div>
</template>

<style scoped>
.split-section {
	width: 100%;
	height: 100%;
	display: flex;
	padding: 1rem 0;
	align-items: center;
	justify-content: center;

	background: rgba(255, 255, 255, 0.8);
	backdrop-filter: blur(5px);
	-webkit-backdrop-filter: blur(5px);
}

.split-section:hover {
	/* Remove default monochromatic color and slightly blurred overlay */
	background: transparent;
	backdrop-filter: none;
	-webkit-backdrop-filter: none;
}
</style>