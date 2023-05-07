<template>
    <div class="list row">
        <div class="col-md-8">
            <div class="input-group mb-3">
                <input
                    type="text"
                    class="form-control"
                    placeholder="Search by title"
                    v-model="title"
                />
                <div class="input-group-append">
                    <button
                        class="btn btn-outline-secondary"
                        type="button"
                        @click="searchTitle"
                    >
                        Search
                    </button>
                </div>
            </div>
        </div>
        <div class="col-md-6">
            <h4>Posts List</h4>
            <ul class="list-group">
                <li
                    class="list-group-item"
                    :class="{ active: index == currentIndex }"
                    v-for="(post, index) in posts"
                    :key="index"
                    @click="setActivePost(post, index)"
                >
                    {{ post.author }}
                </li>
            </ul>

            <button class="m-3 btn btn-sm btn-danger" @click="removeAllPosts">
                Remove All
            </button>
        </div>
        <div class="col-md-6">
            <div v-if="currentPost.postId">
                <h4>Post</h4>
                <div>
                    <label><strong>Post Id:</strong></label> {{ currentPost.postId }}
                </div>
                <div>
                    <label><strong>Author:</strong></label> {{ currentPost.author }}
                </div>
                <div>
                    <label><strong>Description:</strong></label>
                    {{ currentPost.content }}
                </div>
                <div>
                    <label><strong>time:</strong></label>
                    {{ currentPost.time }}
                </div>

                <router-link
                    :to="'/posts/' + currentPost.postId"
                    class="badge badge-warning"
                >Edit</router-link
                >
            </div>
            <div v-else>
                <br />
                <p>Please click on a Post...</p>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import PostDataService from "./../services/PostDataService.ts";
import Post from "./../types/Post";
import ResponseData from "./../types/ResponseData";

export default defineComponent({
    name: "PostList",
    data() {
        return {
            posts: [] as Post[],
            currentPost: {} as Post,
            currentIndex: -1,
            title: "",
        };
    },
    methods: {
        retrievePosts() {
            PostDataService.getAll()
                .then((response: ResponseData) => {
                    this.posts = response.data.data;
                    console.log(response.data);
                })
                .catch((e: Error) => {
                    console.log(e);
                });
        },

        refreshList() {
            this.retrievePosts();
            this.currentPost = {} as Post;
            this.currentIndex = -1;
        },

        setActivePost(post: Post, index = -1) {
            this.currentPost = post;
            this.currentIndex = index;
        },

        removeAllPosts() {
            PostDataService.deleteAll()
                .then((response: ResponseData) => {
                    console.log(response.data);
                    this.refreshList();
                })
                .catch((e: Error) => {
                    console.log(e);
                });
        },

        searchTitle() {
            PostDataService.findByTitle(this.title)
                .then((response: ResponseData) => {
                    this.posts = response.data;
                    this.setActivePost({} as Post);
                    console.log(response.data);
                })
                .catch((e: Error) => {
                    console.log(e);
                });
        },
    },
    mounted() {
        this.retrievePosts();
    },
});
</script>

<style>
.list {
    text-align: left;
    max-width: 750px;
    margin: auto;
}
</style>