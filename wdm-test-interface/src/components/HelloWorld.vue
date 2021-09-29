<style>
ul.listed {
  list-style: none;
  text-align: left;
}
.listed li {
  padding: 3px 5px;
}

li.highlight {
  background-color: aqua;
}
.jsonArea {
  max-width: 260px; 
  margin: 10px auto;
}
</style>
<template>
  <v-container>
    <v-row class="text-center">
      <v-col
        class="mb-5"
        cols="12"
      >
        <v-row justify="center">
          <v-form @submit.prevent="submit" ref="form">
            <div class="flex justify-center my-6">
              <div
                class="px-4"
                :class="{ 'hasError': form.num.$error }">
                <v-text-field 
                  v-model="form.num"
                  label="Enter a number"
                  :rules="[rules.required, rules.numeric, rules.maxLimit]"
                ></v-text-field>
              </div>
            </div>
            <div class="text-center">
              <v-btn type="submit" class="button">
                calculate
              </v-btn>
            </div>
          </v-form>
        </v-row>
      </v-col>

      <v-col v-if="info"
        class="mb-5"
        cols="12"
      >
        <v-row justify="center">
          <p>
            Results for <strong>{{info.amount}}</strong>
          </p>
        </v-row>
        <v-row>
          <div
            class="jsonArea"
            v-html="formattedJSON"
          ></div>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import axios from 'axios';
  
  export default {
    name: 'Welcome',

    data: () => ({
      form: {
        num: ''
      },
      info: null,
      rules: {
        required: value => !!value || 'Required.',
        maxLimit: value => value < 1000000 || 'Max 1 million',
        numeric: value => {
          const pattern = /^(0|[1-9][0-9]*)$/
          return pattern.test(value) || 'Invalid number.'
        },
      }
    }),
    computed: {
      formattedJSON: function() {
        if(this.info.data) {
          const c = ['<ul class="listed">'];
          this.info.data.forEach(n => {
            let newLine;
            if(typeof(n) === 'number') {
              newLine = `<li>${n}</li>`;
            } else {
              newLine = `<li class="highlight">${n}</li>`;
            }
            c.push(newLine)
          });
          c.push('</ul>');
          return c.join('');
        }
        return null;
      }
    },
    methods: {
      submit() {
        const isValid = this.$refs.form.validate();
        if(!isValid) return;
        axios
        .get(`/api/${this.form.num}`)
        .then(response => {
          this.info = response.data;
        });
      }
    }
  }
</script>
