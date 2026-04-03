<template>
	<div class="metasafe-split-home-page">
		<split-section @click="onClick(ProductEnum.Product1)" />
		<split-section @click="onClick(ProductEnum.Product2)" />
	</div>
</template>

<script setup lang="ts">
import SplitSection from './split-section.vue';

/**
 * Split section 50% / 50%
 * On hover color change by default monochromatic and slightly blurred content
 * On click navigation to product page
 */

enum ProductEnum {
	Product1 = 'product1',
	Product2 = 'product2',
}

function onClick(product: ProductEnum): void {
	console.log('clicked');
}
</script>

<style scoped>
.metasafe-split-home-page {
	width: 100%;
	height: 100%;
	display: flex;
	align-items: center;
}
</style>