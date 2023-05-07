<template>
    <div class="submit-form">
        <div v-if="!submitted">
            <div class="form-group">
                <label for="title">Title</label>
                <input
                    type="text"
                    class="form-control"
                    id="title"
                    required
                    v-model="tutorial.title"
                    name="title"
                />
            </div>

            <div class="form-group">
                <label for="description">Description</label>
                <input
                    class="form-control"
                    id="description"
                    required
                    v-model="tutorial.description"
                    name="description"
                />
            </div>

            <button @click="saveTutorial" class="btn btn-success">Submit</button>
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
            tutorial: {
                id: null,
                title: "",
                description: "",
                published: false,
            } as Post,
            submitted: false,
        };
    },
    methods: {
        saveTutorial() {
            let data = {
                title: this.tutorial.title,
                description: this.tutorial.description,
            };

            PostDataService.create(data)
                .then((response: ResponseData) => {
                    this.tutorial.id = response.data.id;
                    console.log(response.data);
                    this.submitted = true;
                })
                .catch((e: Error) => {
                    console.log(e);
                });
        },

        newPost() {
            this.submitted = false;
            this.tutorial = {} as Post;
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