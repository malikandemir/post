<template>
    <div v-if="currentPost.postId" class="edit-form">
        <h4>Post</h4>
        <form>
            <div class="form-group">
                <label for="postId">Post Id</label>
                <input
                    type="text"
                    class="form-control"
                    id="postId"
                    v-model="currentPost.postId"
                />
            </div>
            <div class="form-group">
                <label for="author">Author</label>
                <input
                    type="text"
                    class="form-control"
                    id="author"
                    v-model="currentPost.author"
                />
            </div>
            <div class="form-group">
                <label for="content">Content</label>
                <input
                    type="text"
                    class="form-control"
                    id="content"
                    v-model="currentPost.content"
                />
            </div>
            <div class="form-group">
                <label for="time">Time</label>
                <input
                    type="text"
                    class="form-control"
                    id="time"
                    v-model="currentPost.time"
                />
            </div>
        </form>

        <button class="badge badge-danger mr-2" @click="deletePost">
            Delete
        </button>

        <button type="submit" class="badge badge-success" @click="updatePost">
            Update
        </button>
        <p>{{ message }}</p>
    </div>

    <div v-else>
        <br />
        <p>Please click on a Post...</p>
    </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import PostDataService from "./../services/PostDataService";
import Post from "./../types/Post";
import ResponseData from "./../types/ResponseData";

export default defineComponent({
    name: "Post",
    data() {
        return {
            currentPost: {} as Post,
            message: "",
        };
    },
    methods: {
        getPost(postId: any) {
            PostDataService.get(postId)
                .then((response: ResponseData) => {
                    this.currentPost = response.data.data;
                    console.log(response.data);
                })
                .catch((e: Error) => {
                    console.log(e);
                });
        },

        updatePost() {
            PostDataService.update(this.currentPost.postId, this.currentPost)
                .then((response: ResponseData) => {
                    console.log(response.data);
                    this.message = "The post was updated successfully!";
                })
                .catch((e: Error) => {
                    console.log(e);
                });
        },

        deletePost() {
            PostDataService.delete(this.currentPost.postId)
                .then((response: ResponseData) => {
                    console.log(response.data);
                    this.$router.push({ name: "posts" });
                })
                .catch((e: Error) => {
                    console.log(e);
                });
        },
    },
    mounted() {
        this.message = "";
        this.getPost(this.$route.params.postId);
    },
});
</script>

<style>
.edit-form {
    max-width: 300px;
    margin: auto;
}
</style>