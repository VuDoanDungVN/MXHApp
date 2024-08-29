import {
  View,
  Text,
  SafeAreaView,
  Image,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
} from "react-native";
import React from "react";
import Entypo from "@expo/vector-icons/Entypo";
import Ionicons from "@expo/vector-icons/Ionicons";
import Feather from "@expo/vector-icons/Feather";

export default function HomeScreens() {
  return (
    <SafeAreaView>
      <View>
        <View style={styles.header}>
          <Entypo name="menu" size={35} color="#5d5d5d" />
          <Text style={styles.headerText}>VuDung, Vn</Text>
          <View>
            <Ionicons name="notifications" size={30} color="#5d5d5d" />
            <View style={styles.notificationBadge}></View>
          </View>
        </View>
        <ScrollView>
          <View>
            <View style={styles.profileHeader}>
              <View style={styles.profileInfo}>
                <View style={styles.avatarContainer}>
                  <Image
                    source={require("../../assets/images/Icon/avatar.jpg")}
                    style={styles.avatar}
                  />
                  <View style={styles.onlineBadge}></View>
                </View>
                <View>
                  <Text style={styles.profileName}>Vũ Dũng</Text>
                </View>
              </View>
              <View>
                <Entypo
                  name="dots-three-horizontal"
                  size={24}
                  color="#5d5d5d"
                />
              </View>
            </View>
            <View style={styles.postContainer}>
              <TouchableOpacity>
                <View>
                  <Image
                    source={require("../../assets/images/Post/1.jpg")}
                    style={styles.postImage}
                  />
                </View>
              </TouchableOpacity>
              <View style={styles.postActions}>
                <View style={styles.actionButtons}>
                  <TouchableOpacity>
                    <View style={styles.actionButton}>
                      <Image
                        source={require("../../assets/images/Icon/1.png")}
                        style={styles.actionIcon}
                      />
                      <Text style={styles.actionText}>66.9K</Text>
                    </View>
                  </TouchableOpacity>
                  <TouchableOpacity>
                    <View style={styles.actionButton}>
                      <Image
                        source={require("../../assets/images/Icon/2.png")}
                        style={styles.actionIcon}
                      />
                      <Text style={styles.actionText}>66.9K</Text>
                    </View>
                  </TouchableOpacity>
                  <TouchableOpacity>
                    <View style={styles.actionButton}>
                      <Image
                        source={require("../../assets/images/Icon/3.png")}
                        style={styles.actionIcon}
                      />
                      <Text style={styles.actionText}>66.9K</Text>
                    </View>
                  </TouchableOpacity>
                </View>
                <View>
                  <Feather name="share" size={25} color="#5d5d5d" />
                </View>
              </View>
              <View style={styles.postCaption}>
                <Text>
                  When you try a little too hard to pose for the camera...
                </Text>
                <Text style={styles.seeMoreText}>Xem thêm</Text>
              </View>
              <View style={styles.commentsSection}>
                <View>
                  <Text style={styles.commentsText}>Xem tất cả bình luận</Text>
                </View>
                <View>
                  <Text style={styles.commentsText}>23 tháng 5</Text>
                </View>
              </View>
            </View>
          </View>
          <View>
            <View style={styles.profileHeader}>
              <View style={styles.profileInfo}>
                <View style={styles.avatarContainer}>
                  <Image
                    source={require("../../assets/images/Icon/avatar.jpg")}
                    style={styles.avatar}
                  />
                  <View style={styles.onlineBadge}></View>
                </View>
                <View>
                  <Text style={styles.profileName}>Vũ Dũng</Text>
                </View>
              </View>
              <View>
                <Entypo
                  name="dots-three-horizontal"
                  size={24}
                  color="#5d5d5d"
                />
              </View>
            </View>
            <View style={styles.postContainer}>
              <TouchableOpacity>
                <View>
                  <Image
                    source={require("../../assets/images/Post/2.jpg")}
                    style={styles.postImage}
                  />
                </View>
              </TouchableOpacity>
              <View style={styles.postActions}>
                <View style={styles.actionButtons}>
                  <TouchableOpacity>
                    <View style={styles.actionButton}>
                      <Image
                        source={require("../../assets/images/Icon/1.png")}
                        style={styles.actionIcon}
                      />
                      <Text style={styles.actionText}>66.9K</Text>
                    </View>
                  </TouchableOpacity>
                  <TouchableOpacity>
                    <View style={styles.actionButton}>
                      <Image
                        source={require("../../assets/images/Icon/2.png")}
                        style={styles.actionIcon}
                      />
                      <Text style={styles.actionText}>66.9K</Text>
                    </View>
                  </TouchableOpacity>
                  <TouchableOpacity>
                    <View style={styles.actionButton}>
                      <Image
                        source={require("../../assets/images/Icon/3.png")}
                        style={styles.actionIcon}
                      />
                      <Text style={styles.actionText}>66.9K</Text>
                    </View>
                  </TouchableOpacity>
                </View>
                <View>
                  <Feather name="share" size={25} color="#5d5d5d" />
                </View>
              </View>
              <View style={styles.postCaption}>
                <Text>
                  When you try a little too hard to pose for the camera...
                </Text>
                <Text style={styles.seeMoreText}>Xem thêm</Text>
              </View>
              <View style={styles.commentsSection}>
                <View>
                  <Text style={styles.commentsText}>Xem tất cả bình luận</Text>
                </View>
                <View>
                  <Text style={styles.commentsText}>23 tháng 5</Text>
                </View>
              </View>
            </View>
          </View>
          <View>
            <View style={styles.profileHeader}>
              <View style={styles.profileInfo}>
                <View style={styles.avatarContainer}>
                  <Image
                    source={require("../../assets/images/Icon/avatar.jpg")}
                    style={styles.avatar}
                  />
                  <View style={styles.onlineBadge}></View>
                </View>
                <View>
                  <Text style={styles.profileName}>Vũ Dũng</Text>
                </View>
              </View>
              <View>
                <Entypo
                  name="dots-three-horizontal"
                  size={24}
                  color="#5d5d5d"
                />
              </View>
            </View>
            <View style={styles.postContainer}>
              <TouchableOpacity>
                <View>
                  <Image
                    source={require("../../assets/images/Post/3.jpg")}
                    style={styles.postImage}
                  />
                </View>
              </TouchableOpacity>
              <View style={styles.postActions}>
                <View style={styles.actionButtons}>
                  <TouchableOpacity>
                    <View style={styles.actionButton}>
                      <Image
                        source={require("../../assets/images/Icon/1.png")}
                        style={styles.actionIcon}
                      />
                      <Text style={styles.actionText}>66.9K</Text>
                    </View>
                  </TouchableOpacity>
                  <TouchableOpacity>
                    <View style={styles.actionButton}>
                      <Image
                        source={require("../../assets/images/Icon/2.png")}
                        style={styles.actionIcon}
                      />
                      <Text style={styles.actionText}>66.9K</Text>
                    </View>
                  </TouchableOpacity>
                  <TouchableOpacity>
                    <View style={styles.actionButton}>
                      <Image
                        source={require("../../assets/images/Icon/3.png")}
                        style={styles.actionIcon}
                      />
                      <Text style={styles.actionText}>66.9K</Text>
                    </View>
                  </TouchableOpacity>
                </View>
                <View>
                  <Feather name="share" size={25} color="#5d5d5d" />
                </View>
              </View>
              <View style={styles.postCaption}>
                <Text>
                  When you try a little too hard to pose for the camera...
                </Text>
                <Text style={styles.seeMoreText}>Xem thêm</Text>
              </View>
              <View style={styles.commentsSection}>
                <View>
                  <Text style={styles.commentsText}>Xem tất cả bình luận</Text>
                </View>
                <View>
                  <Text style={styles.commentsText}>23 tháng 5</Text>
                </View>
              </View>
            </View>
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    padding: 10,
  },
  headerText: {
    fontSize: 20,
  },
  notificationBadge: {
    backgroundColor: "#c90037",
    height: 10,
    width: 10,
    borderRadius: 50,
    position: "absolute",
    top: 0,
    right: 1,
  },
  profileHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 10,
  },
  profileInfo: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    gap: 10,
  },
  avatarContainer: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 50,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
  },
  onlineBadge: {
    width: 10,
    height: 10,
    borderRadius: 50,
    backgroundColor: "#00E53D",
    position: "absolute",
    bottom: 0,
    left: 35,
  },
  profileName: {
    fontSize: 15,
    fontWeight: "bold",
  },
  postContainer: {
    paddingHorizontal: 10,
  },
  postImage: {
    width: "100%",
    height: 190,
    borderRadius: 10,
  },
  postActions: {
    display: "flex",
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
  },
  actionButtons: {
    display: "flex",
    justifyContent: "flex-start",
    flexDirection: "row",
    paddingVertical: 10,
  },
  actionButton: {
    justifyContent: "flex-start",
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
  },
  actionIcon: {
    width: 30,
    height: 30,
  },
  actionText: {
    fontSize: 15,
  },
  postCaption: {
    justifyContent: "flex-start",
    flexDirection: "row",
  },
  seeMoreText: {
    color: "#A1A1A1",
  },
  commentsSection: {
    paddingVertical: 5,
    gap: 5,
  },
  commentsText: {
    color: "#A1A1A1",
  },
});
