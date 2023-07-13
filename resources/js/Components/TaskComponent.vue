<template>
    <div class="row justify-content-center">
        <div class="col-md-8">
            <div class="card">
                <div class="card-header bg-dard">
                        <div class="row">
                          <div class="col-md-12">
                              <div class="mb-3 form-floating">
                                  <input type="file" @change="handleFileUpload">      
                              </div>
                          </div>
                        </div>
                        <div class="col-md-12">
                            <button class="btn btn-primary" @click="uploadFile">Upload</button>
                        </div>    
                </div>
            </div>
        </div>
    </div>
   
    
</template>
<script>
import axios from 'axios';

export default {
    setup: () => ({
        title: 'File Upload',
    }),
    data(){
        return{
            selectedFile: null
        }
    },
    methods: {
        handleFileUpload(event) {
            this.selectedFile = event.target.files[0];
        },
        uploadFile(){
            if (this.selectedFile) {
                const formData = new FormData();
                formData.append('file', this.selectedFile);
                
                axios.post('http://127.0.0.1:8000/api/upload', formData)
                .then(response => {
                    console.log(response.data.message);
                })
                .catch(error => {
                    console.error(error.response.data.error);
                });
            } else {
                console.error('No file selected');
            }
        
        },
    }
    
}
</script>
