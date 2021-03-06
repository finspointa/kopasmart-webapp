<template>
  <v-container fill-height fluid grid-list-xl>
    <v-layout justify-start wrap>
      <v-flex xs12 md4 sm12 class="mt-0 ml-0">
        <v-container py-0>
          <v-layout wrap>
            <v-flex xs12 md12 class="pa-0 ma-0">
              <v-card class="mx-auto" raised height="480">
                <v-img
                  src="https://render.fineartamerica.com/images/rendered/default/poster/8/10/break/images/artworkimages/medium/2/adelie-penguin-on-ice-theo-allofs.jpg"
                  lazy-src="https://render.fineartamerica.com/images/rendered/default/poster/8/10/break/images/artworkimages/medium/2/adelie-penguin-on-ice-theo-allofs.jpg"
                  aspect-ratio="1"
                  class="grey lighten-2"
                  height="400"
                  max-height="400"
                >
                  <template v-slot:placeholder>
                    <v-row class="fill-height ma-0" align="center" justify="center">
                      <v-progress-circular indeterminate color="grey lighten-5"></v-progress-circular>
                    </v-row>
                  </template>
                </v-img>
                <v-card-title>
                  {{ userdata.username }}
                  <v-icon color="primary" size="20" v-show="userdata.is_active">mdi-check-decagram</v-icon>
                </v-card-title>
                <v-card-subtitle>{{ userdata.role }}</v-card-subtitle>
              </v-card>
            </v-flex>

            <v-flex xs12 md12 class="ma-0 pa-0">
              <v-type-divider type="Info"></v-type-divider>
            </v-flex>
            <v-flex xs12 md12 class="ma-0 pa-0">
              <v-address-card :address="address"></v-address-card>
            </v-flex>

            <v-flex xs12 md12 class="ma-0 pa-0">
              <v-type-divider type="Work"></v-type-divider>
            </v-flex>

            <v-flex xs12 md12 class="ma-0 pa-0">
              <v-address-card :address="address1"></v-address-card>
            </v-flex>
            <v-flex xs12 md12 class="ma-0 pa-0">
              <v-address-card :address="address2"></v-address-card>
            </v-flex>
            <v-flex xs12 md12 class="ma-0 pa-0">
              <v-type-divider type="Skills"></v-type-divider>
            </v-flex>
            <v-flex xs12 md12>
              <span class="text-caption font-weight-medium">UI/UX</span>
            </v-flex>
            <v-flex xs12 md12>
              <span class="text-caption font-weight-medium">Branding</span>
            </v-flex>
            <v-flex xs12 md12>
              <h6 class="text-caption font-weight-medium">Web - Design</h6>
            </v-flex>
            <v-flex xs12 md12>
              <span class="text-caption font-weight-medium">Packaging</span>
            </v-flex>
            <v-flex xs12 md12>
              <span class="text-caption font-weight-medium">Print & Editorial</span>
            </v-flex>
          </v-layout>
        </v-container>
      </v-flex>
      <v-flex xs12 md8 sm12 class="mt-0 ml-0 primary lighten-2">
        <v-card flat class="pa-1" tile>
          <v-container py-0>
            <v-layout wrap>
              <v-flex xs12 md12>
                <v-list>
                  <v-list-item-group color="primary">
                    <v-list-item two-line inactive :ripple="false">
                      <v-list-item-content>
                        <v-list-item-title>
                          <v-row>
                            <v-col>
                              <span class="font-weight-bold text-h5">
                                {{
                                userdata.first_name
                                }}&nbsp; {{ userdata.last_name }}
                              </span>
                            </v-col>
                            <v-col>
                              <span class="font-weight-light text-caption">
                                <v-icon>mdi-map-marker</v-icon>New York, NY
                              </span>
                            </v-col>
                          </v-row>
                        </v-list-item-title>
                        <v-list-item-subtitle
                          class="primary--text text-caption font-weight-medium"
                        >{{ userdata.role }}</v-list-item-subtitle>
                      </v-list-item-content>
                    </v-list-item>
                    <v-list-item
                      v-if="userdata !== undefined"
                      two-line
                      inactive
                      :ripple="false"
                      class="mt-8"
                    >
                      <v-list-item-content>
                        <v-list-item-subtitle class="text-overline">{{ $t('label.text.Rankings') }}</v-list-item-subtitle>
                        <v-list-item-title v-if="userdata.lender_profile">
                          <v-row align="center" justify="start">
                            <v-col cols="2" v-if="userdata.lender_profile">
                              <span
                                class="font-weight-bold text-h5"
                              >{{ userdata.lender_profile.raters_count }}</span>
                            </v-col>
                            <v-col cols="4">
                              <v-rating
                                half-increments
                                :full-icon="fullIcon"
                                :half-icon="halfIcon"
                                :empty-icon="emptyIcon"
                                background-color="primary"
                                v-model="rating"
                                @input="rate = true"
                                :value="parseInt(userdata.lender_profile.rtotal_rating_score)"
                              ></v-rating>
                            </v-col>
                            <v-col sm="1" v-show="userdata.is_lender">
                              <v-btn
                                x-small
                                color="primary"
                                v-show="rate"
                                @click.stop="rateThisPersonLanderProfile()"
                              >Rate</v-btn>
                            </v-col>
                          </v-row>
                        </v-list-item-title>
                      </v-list-item-content>
                    </v-list-item>
                    <v-list-item inactive :ripple="false">
                      <v-container fluid>
                        <v-row no-gutters>
                          <v-col
                            class="font-weight-bold text-overline primary--text"
                          >{{ userdata.follows_count }} {{ $t('label.text.Followers') }}</v-col>
                          <v-col
                            class="font-weight-bold text-overline primary--text"
                          >{{ userdata.following_count }} {{ $t('label.text.Follows') }} </v-col>
                        </v-row>
                      </v-container>
                    </v-list-item>
                    <v-list-item inactive :ripple="false">
                      <v-list-item-content>
                        <v-container fluid>
                          <v-row no-gutters>
                            <v-col xs="12" md="3" class="ma-1">
                              <v-btn
                                v-if="userdata.is_following_me"
                                @click.stop="unfollowThisPerson"
                                small
                                rounded
                                cols="auto"
                                color="primary"
                                block
                              >Following</v-btn>
                              <v-btn
                                v-else
                                small
                                rounded
                                outlined
                                cols="auto"
                                @click.stop="followThisPerson"
                                color="primary"
                                block
                              > {{ $t('label.button.btnFollow') }}</v-btn>
                            </v-col>
                            <v-col sm="12" md="3" class="ma-1">
                              <v-btn small cols="auto" block>
                                <v-icon small>mdi-check</v-icon>&nbsp; {{ $t('label.button.btncontacts') }}
                              </v-btn>
                            </v-col>
                            <v-col sm="12" md="3" class="ma-1">
                              <v-btn
                                small
                                text
                                outlined
                                color="primary"
                                class="font-weight-normal"
                                cols="auto"
                                block
                              >
                                <v-icon small>mdi-bug</v-icon>&nbsp;{{ $t('label.button.btnReportUser') }}
                              </v-btn>
                            </v-col>
                          </v-row>
                        </v-container>
                      </v-list-item-content>
                    </v-list-item>
                    <v-list-item inactive class="ma-0 pa-0" :ripple="false">
                      <v-list-item-content class="ma-0 pa-0">
                        <v-tabs right grow center-active class="elevation-2">
                          <v-tab class="font-weight-light">
                            <span>
                              <v-icon small left>mdi-eye</v-icon>{{ $t('label.vtab.Timeline') }}
                            </span>
                          </v-tab>
                          <v-tab class="font-weight-light">
                            <span>
                              <v-icon small left>mdi-account</v-icon>{{ $t('label.vtab.About') }}
                            </span>
                          </v-tab>
                          <v-tab class="font-weight-light" @click.stop="getThisUserPosts()">
                            <v-icon small left>mdi-format-list-bulleted-triangle</v-icon>{{ $t('label.vtab.Posts') }}
                          </v-tab>
                          <v-tab class="font-weight-light" @click.stop="getThisUserComments()">
                            <v-icon small left>mdi-chat</v-icon>{{ $t('label.vtab.Comments') }}
                          </v-tab>
                          <v-tab class="font-weight-light" @click.stop="getThisPersonFollowers">
                            <v-icon small left>mdi-format-list-bulleted-triangle</v-icon>{{ $t('label.vtab.Followers') }}
                          </v-tab>
                          <v-tab class="font-weight-light" @click.stop="getThisPersonFollowings()">
                            <v-icon small left>mdi-chat</v-icon>{{ $t('label.vtab.Followings') }}
                          </v-tab>

                          <v-tab-item>
                            <v-card flat>
                              <v-card-text>
                                <p>
                                  Sed aliquam ultrices mauris. Donec posuere vulputate arcu. Morbi ac felis. Etiam
                                  feugiat lorem non metus. Sed a libero.
                                </p>

                                <p>
                                  Nam ipsum risus, rutrum vitae, vestibulum eu, molestie vel, lacus. Aenean tellus
                                  metus, bibendum sed, posuere ac, mattis non, nunc. Aliquam lobortis. Aliquam lobortis.
                                  Suspendisse non nisl sit amet velit hendrerit rutrum.
                                </p>

                                <p class="mb-0">
                                  Phasellus dolor. Fusce neque. Fusce fermentum odio nec arcu. Pellentesque libero
                                  tortor, tincidunt et, tincidunt eget, semper nec, quam. Phasellus blandit leo ut odio.
                                </p>
                              </v-card-text>
                            </v-card>
                          </v-tab-item>
                          <v-tab-item>
                            <v-card flat>
                              <v-card-text>
                                <p>{{ userdata.biography }}</p>
                              </v-card-text>
                            </v-card>
                          </v-tab-item>
                          <v-tab-item>
                            <v-row>
                              <v-col align="center" v-if="posts === null">
                                <v-progress-circular
                                  :width="2"
                                  color="primary"
                                  size="20"
                                  indeterminate
                                ></v-progress-circular>
                              </v-col>
                              <v-col
                                v-else-if="posts.results.length !== 0"
                                cols="12"
                                lg="6"
                                md="6"
                                sm="12"
                                wrap
                                v-for="(post, index) in posts.results"
                                :key="index"
                              >
                                <post-card :post="post"></post-card>
                              </v-col>
                              <p v-else></p>
                            </v-row>
                          </v-tab-item>
                          <v-tab-item>
                            <v-row>
                              <v-col align="center" v-if="comments === null">
                                <v-progress-circular
                                  :width="2"
                                  color="primary"
                                  size="20"
                                  indeterminate
                                ></v-progress-circular>
                              </v-col>
                              <v-col
                                v-else-if="comments.results.length !== 0"
                                cols="12"
                                lg="6"
                                md="6"
                                sm="12"
                                wrap
                                v-for="(comment, index) in comments.results"
                                :key="index"
                              >
                                <post-card :post="comment"></post-card>
                              </v-col>
                              <p v-else></p>
                            </v-row>
                          </v-tab-item>
                          <v-tab-item>
                            <v-row>
                              <v-col align="center" v-if="followers === null">
                                <v-progress-circular
                                  :width="2"
                                  color="primary"
                                  size="20"
                                  indeterminate
                                ></v-progress-circular>
                              </v-col>
                              <v-col
                                v-else-if="followers.results.length !== 0"
                                cols="12"
                                lg="6"
                                md="6"
                                sm="12"
                                wrap
                                v-for="(follower, index) in followers.results"
                                :key="index"
                              >
                                <v-follows :follow="follower"></v-follows>
                              </v-col>
                              <p v-else></p>
                            </v-row>
                          </v-tab-item>
                          <v-tab-item>
                            <v-row>
                              <v-col align="center" v-if="followings === null">
                                <v-progress-circular
                                  :width="2"
                                  color="primary"
                                  size="20"
                                  indeterminate
                                ></v-progress-circular>
                              </v-col>
                              <v-col
                                v-else-if="followings.results.length !== 0"
                                sm="12"
                                wrap
                                v-for="(follow, index) in followings.results"
                                :key="index"
                              >
                                <v-follows :follow="follow"></v-follows>
                              </v-col>
                              <p v-else></p>
                            </v-row>
                          </v-tab-item>
                        </v-tabs>
                      </v-list-item-content>
                    </v-list-item>
                  </v-list-item-group>
                </v-list>
              </v-flex>
            </v-layout>
          </v-container>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>
<script lang="js">
import c_type_divider from "@/components/profile/c_type_divider";
import c_address_card from "@/components/profile/c_address_card";
import postCard from "@/components/posts/p_post_card"
import c_follows from "@/components/follows/c_follows";

export default {
  props: {userdata:Object},
  components: {
    'post-card': postCard,
    'v-type-divider': c_type_divider,
    'v-address-card': c_address_card,
    'v-follows': c_follows
  },
  data() {
    return {
      dialog: false,
      rate: false,
      tab: null,
      rating: 2,
      posts: null,
      comments: null,
      followers: null,
      followings: null,
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      emptyIcon: 'mdi-star-outline',
      fullIcon: 'mdi-star',
      halfIcon: 'mdi-star-half-full',
      address: {
        location: '',
        class: '',
        street_name: '',
        street_address: ''
      },
      address1: {
        location: "Spotify New York",
        class: "Primary",
        street_name: "170 William Street",
        street_address: "New York, NY 10038-78 212-312-51\n"
      },
      address2: {
        location: "Metropolitan Museum",
        class: "Secondary",
        street_name: "S45 E 68th Street",
        street_address: "New York, NY 10038-78 212-312-51\n"
      },


    }
  },
  created() {
    this.address.location = this.userdata.username;
    this.address.class = "Home Address";
    this.address.street_name = "Phone No. " + this.userdata.phone;
    this.address.street_address = "Email Address " + this.userdata.email;

  },
  methods: {
    async getThisUserPosts() {
      console.log("Clicked" + this.$route.params.id)
      return await this.$api.$get(`users/${this.$route.params.id}/posts/?type=post`)
        .then(response => {
          this.posts = response;
        }).catch(error => {
          console.log(error);

        });
    },
    async getThisUserComments() {
      console.log("Clicked" + this.$route.params.id)
      return await this.$api.$get(`users/${this.$route.params.id}/comments/`)
        .then(response => {
          this.comments = response;
        }).catch(error => {
          console.log(error);

        });
    },
    async unfollowThisPerson() {
      return await this.$api.$post(`/unfollow-user/`, {"id": this.$route.params.id})
        .then(response => {
          if (response !== null) {
            this.$parent.viewusedata();
          }
        }).catch(error => {
          console.log(error);

        });

    },
    async followThisPerson() {
      return await this.$api.$post(`/follow-user/`, {"id": this.$route.params.id})
        .then(response => {
          if (response !== null) {
            this.$parent.viewusedata();
          }
        }).catch(error => {
          console.log(error);

        });
    },
    async getThisPersonFollowers() {
      return await this.$api.$get(`users/${this.$route.params.id}/follows/`)
        .then(response => {
          if (response !== null) {
            this.followers = response;
          }
        }).catch(error => {
          console.log(error);

        });
    },
    async getThisPersonFollowings() {
      return await this.$api.$get(`users/${this.$route.params.id}/following/`)
        .then(response => {
          if (response !== null) {
            this.followings = response;
            this.followings = response;
          }
        }).catch(error => {
          console.log(error);

        });
    },
    addRating() {
      this.rate = true;
    },
    async rateThisPersonLanderProfile() {
      let rate_dta = {
        "profile": parseInt(this.userdata.lender_profile.id),
        "score": Math.round(this.rating)
      };
      return await this.userdata.lender_profile.my_rating ? this.$api.$patch(`/lender-profile-ratings/${this.$route.params.id}/`, rate_dta) : this.$api.$post(`/lender-profile-ratings/`, rate_dta)
        .then(response => {
          if (response !== null) {
            this.$parent.viewusedata();
          }
        }).catch(error => {
          console.log(error);
        });
    }

  }
}
</script>
<style>
.basil {
  background-color: #fffbe6 !important;
}

.basil--text {
  color: #356859 !important;
}
</style>
