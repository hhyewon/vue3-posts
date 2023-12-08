<template>
	<div>
		<h2>게시글 상세</h2>
		<p>{{ $route.params }}</p>
		<p>{{ $route.query }}</p>
		<hr class="my-4" />
		<h3>제목</h3>
		<p>내용</p>
		<p class="text-muted"></p>
		<div class="row g-2">
			<div class="col-auto">
				<button class="btn btn-outline-dark">이전글</button>
			</div>
			<div class="col-auto">
				<button class="btn btn-outline-dark">다음글</button>
			</div>
			<div class="col-auto me-auto"></div>
			<div class="col-auto">
				<button class="btn btn-outline-dark" @click="goListPage">목록</button>
			</div>
			<div class="col-auto">
				<button class="btn btn-outline-primary" @click="goEditPage">
					수정
				</button>
			</div>
			<div class="col-auto">
				<button class="btn btn-outline-danger">삭제</button>
			</div>
		</div>
	</div>
</template>

<script setup>
import { useRoute, useRouter } from 'vue-router';

const router = useRouter();
const route = useRoute();
const id = route.params.id;

const goListPage = () => {
	router.push({
		name: 'PostList',
	});
};

const goEditPage = () => {
	router.push({
		name: 'PostEdit',
		params: {
			id,
		},
	});
};
</script>

<style lang="scss" scoped></style>
