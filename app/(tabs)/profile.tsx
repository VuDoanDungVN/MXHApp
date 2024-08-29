import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  Image,
  TouchableOpacity,
  StyleSheet,
  Modal,
} from "react-native";
import React, { useState } from "react";
import Ionicons from "@expo/vector-icons/Ionicons";

export default function ProfileScreens() {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImagePress = (image: any) => {
    setSelectedImage(image);
    setModalVisible(true);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.contentContainer}>
        <View style={styles.header}>
          <Text style={styles.username}>vudungjp</Text>
          <TouchableOpacity>
            <View style={styles.followButton}>
              <Ionicons name="add" size={20} color="#fff" />
              <Text style={styles.followButtonText}>Follow</Text>
            </View>
          </TouchableOpacity>
        </View>
        {/* User Avatar */}
        <View style={styles.avatarSection}>
          <TouchableOpacity>
            <View style={styles.titleSection}>
              <View>
                <View style={styles.avatarContainer}>
                  <Image
                    source={require("../../assets/images/Icon/avatar.jpg")}
                    style={styles.avatarImage}
                  />
                </View>
                <View style={styles.addIconContainer}>
                  <View style={styles.addIconBackground}>
                    <Ionicons name="add" size={20} color="#fff" />
                  </View>
                </View>
              </View>
              <View style={styles.nameSection}>
                <Text style={styles.nameText}>Vũ Dũng</Text>
              </View>
            </View>
          </TouchableOpacity>
          <View style={styles.statsSection}>
            <TouchableOpacity>
              <View style={styles.stat}>
                <Text style={styles.statNumber}>137</Text>
                <Text style={styles.statLabel}>bài viết</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity>
              <View style={styles.stat}>
                <Text style={styles.statNumber}>7.093</Text>
                <Text style={styles.statLabel}>người theo dõi</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity>
              <View style={styles.stat}>
                <Text style={styles.statNumber}>368</Text>
                <Text style={styles.statLabel}>đang theo dõi</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
        <ScrollView>
          <TouchableOpacity>
            <View style={styles.dashboard}>
              <Text style={styles.dashboardTitle}>
                Bảng điều khiển chuyên nghiệp
              </Text>
              <Text style={styles.dashboardSubtitle}>
                Đã tiếp cận được 80 tài khoản trong 30 ngày qua.
              </Text>
            </View>
          </TouchableOpacity>
          <View style={styles.actionsContainer}>
            <TouchableOpacity style={styles.actionButton}>
              <Text style={styles.actionButtonText}>
                Chỉnh sửa trang cá nhân
              </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.actionButton}>
              <Text style={styles.actionButtonText}>Chia sẻ trang cá nhân</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.separator} />
          <View style={styles.postsRow}>
            <TouchableOpacity
              onPress={() =>
                handleImagePress(require("../../assets/images/Post/10.jpg"))
              }
            >
              <Image
                source={require("../../assets/images/Post/10.jpg")}
                style={styles.postImage}
              />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() =>
                handleImagePress(require("../../assets/images/Post/11.jpg"))
              }
            >
              <Image
                source={require("../../assets/images/Post/11.jpg")}
                style={styles.postImage}
              />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() =>
                handleImagePress(require("../../assets/images/Post/12.jpg"))
              }
            >
              <Image
                source={require("../../assets/images/Post/12.jpg")}
                style={styles.postImage}
              />
            </TouchableOpacity>
          </View>
          <View style={styles.postsRow}>
            <TouchableOpacity
              onPress={() =>
                handleImagePress(require("../../assets/images/Post/4.jpg"))
              }
            >
              <Image
                source={require("../../assets/images/Post/4.jpg")}
                style={styles.postImage}
              />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() =>
                handleImagePress(require("../../assets/images/Post/5.jpg"))
              }
            >
              <Image
                source={require("../../assets/images/Post/5.jpg")}
                style={styles.postImage}
              />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() =>
                handleImagePress(require("../../assets/images/Post/6.jpg"))
              }
            >
              <Image
                source={require("../../assets/images/Post/6.jpg")}
                style={styles.postImage}
              />
            </TouchableOpacity>
          </View>
          <View style={styles.postsRow}>
            <TouchableOpacity
              onPress={() =>
                handleImagePress(require("../../assets/images/Post/7.jpg"))
              }
            >
              <Image
                source={require("../../assets/images/Post/7.jpg")}
                style={styles.postImage}
              />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() =>
                handleImagePress(require("../../assets/images/Post/8.jpg"))
              }
            >
              <Image
                source={require("../../assets/images/Post/8.jpg")}
                style={styles.postImage}
              />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() =>
                handleImagePress(require("../../assets/images/Post/9.jpg"))
              }
            >
              <Image
                source={require("../../assets/images/Post/9.jpg")}
                style={styles.postImage}
              />
            </TouchableOpacity>
          </View>
          <View style={styles.postsRow}>
            <TouchableOpacity
              onPress={() =>
                handleImagePress(require("../../assets/images/Post/10.jpg"))
              }
            >
              <Image
                source={require("../../assets/images/Post/10.jpg")}
                style={styles.postImage}
              />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() =>
                handleImagePress(require("../../assets/images/Post/11.jpg"))
              }
            >
              <Image
                source={require("../../assets/images/Post/11.jpg")}
                style={styles.postImage}
              />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() =>
                handleImagePress(require("../../assets/images/Post/12.jpg"))
              }
            >
              <Image
                source={require("../../assets/images/Post/12.jpg")}
                style={styles.postImage}
              />
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>

      <Modal
        visible={modalVisible}
        transparent={true}
        animationType="slide"
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalContainer}>
          <TouchableOpacity
            style={styles.closeButton}
            onPress={() => setModalVisible(false)}
          >
            <Ionicons name="close" size={30} color="#fff" />
          </TouchableOpacity>
          {selectedImage && (
            <Image source={selectedImage} style={styles.fullImage} />
          )}
        </View>
      </Modal>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contentContainer: {
    padding: 10,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  username: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#5d5d5d",
  },
  followButton: {
    backgroundColor: "#c90037",
    height: 35,
    width: 80,
    borderRadius: 10,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    padding: 5,
  },
  followButtonText: {
    fontSize: 15,
    color: "#fff",
  },
  avatarSection: {
    flexDirection: "row",
    alignItems: "center",
    gap: 20,
  },
  titleSection: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  avatarContainer: {
    width: 90,
    height: 90,
    borderRadius: 45,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
  },
  avatarImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
  },
  addIconContainer: {
    position: "absolute",
    bottom: 5,
    left: 70,
    backgroundColor: "#fff",
    width: 23,
    height: 23,
    borderRadius: 12,
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
  },
  addIconBackground: {
    backgroundColor: "#01abe8",
    width: 20,
    height: 20,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  statsSection: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginLeft: 20,
    gap: 30,
  },
  stat: {
    alignItems: "center",
  },
  statNumber: {
    fontSize: 15,
  },
  statLabel: {
    fontSize: 15,
  },
  nameSection: {
    alignItems: "flex-start",
    marginVertical: 5,
  },
  nameText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#5d5d5d",
  },
  dashboard: {
    backgroundColor: "#D8D8D8",
    padding: 20,
    borderRadius: 10,
    marginVertical: 5,
  },
  dashboardTitle: {
    fontSize: 15,
    color: "#5d5d5d",
    fontWeight: "bold",
  },
  dashboardSubtitle: {
    fontSize: 15,
    color: "#5d5d5d",
  },
  actionsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 5,
  },
  actionButton: {
    backgroundColor: "#D8D8D8",
    padding: 20,
    borderRadius: 10,
    width: "49%",
    alignItems: "center",
  },
  actionButtonText: {
    fontSize: 15,
    color: "#5d5d5d",
    fontWeight: "bold",
  },
  separator: {
    backgroundColor: "#D8D8D8",
    width: "100%",
    height: 1,
    marginVertical: 5,
  },
  postsRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 5,
  },
  postImage: {
    width: 130,
    height: 130,
    borderRadius: 10,
  },
  modalContainer: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.9)",
    justifyContent: "center",
    alignItems: "center",
  },
  closeButton: {
    position: "absolute",
    top: 40,
    right: 20,
  },
  fullImage: {
    width: "90%",
    height: "70%",
    resizeMode: "contain",
  },
});
