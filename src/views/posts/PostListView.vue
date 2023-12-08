<template>
	<div>
		<h2>게시글 목록</h2>
		<hr class="my-4" />
		<div class="row">
			<div class="col-4" v-for="post in posts" :key="post.id">
				<PostItem
					:title="post.title"
					:content="post.content"
					:create-at="post.createAt"
					@click="goPage(post.id)"
				></PostItem>
			</div>
		</div>
	</div>
</template>

<script setup>
import PostItem from '@/components/PostItem.vue';
import { ref } from 'vue';
import { getPosts } from '@/api/posts';
import { useRouter } from 'vue-router';

const router = useRouter();
const posts = ref([]);

const fetchPosts = () => {
	posts.value = getPosts();
};

fetchPosts();

const goPage = id => {
	// router.push(`/posts/${id}`);
	router.push({
		name: 'PostDetail',
		params: {
			id,
		},
		query: {
			searchText: 'hello',
		},
		hash: '#world',
	});
};
</script>

<style lang="scss" scoped></style>
