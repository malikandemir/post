<template>
    <div class="submit-form">
        <div v-if="!submitted">
            <div class="form-group">
                <label for="title">Post Id</label>
                <input
                    type="text"
                    class="form-control"
                    id="postId"
                    required
                    v-model="post.postId"
                    name="title"
                />
            </div>

            <div class="form-group">
                <label for="description">author</label>
                <input
                    class="form-control"
                    id="author"
                    required
                    v-model="post.author"
                    name="description"
                />
            </div>



            <div class="form-group">
                <label for="description">content</label>
                <input
                    class="form-control"
                    id="content"
                    required
                    v-model="post.content"
                    name="description"
                />
            </div>

            <button @click="savePost" class="btn btn-success">Submit</button>
        </div>

        <div v-else>
            <h4>You submitted successfully!</h4>
            <button class="btn btn-success" @click="newPost">Add</button>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import PostDataService from "./../services/PostDataService";
import Post from "./../types/Post";
import ResponseData from "./../types/ResponseData";

export default defineComponent({
    name: "AddPost",
    data() {
        return {
            post: {
                postId: null,
                author: "",
                content: ""
            } as Post,
            submitted: false,
        };
    },
    methods: {
        savePost() {
            let data = {
                postId: this.post.postId,
                author: this.post.author,
                content: this.post.content,
            };

            PostDataService.create(data)
                .then((response: ResponseData) => {
                    console.log(response.data);
                    this.submitted = true;
                })
                .catch((e: Error) => {
                    console.log(e);
                });
        },

        newPost() {
            this.submitted = false;
            this.post = {} as Post;
        },
    },
});
</script>

<style>
.submit-form {
    max-width: 300px;
    margin: auto;
}
</style>