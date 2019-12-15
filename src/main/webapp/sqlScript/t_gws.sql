/*
 Navicat MySQL Data Transfer

 Source Server         : localhost_3306
 Source Server Type    : MySQL
 Source Server Version : 50725
 Source Host           : localhost:3306
 Source Schema         : zti

 Target Server Type    : MySQL
 Target Server Version : 50725
 File Encoding         : 65001

 Date: 13/12/2019 21:34:06
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for t_gws
-- ----------------------------
DROP TABLE IF EXISTS `t_gws`;
CREATE TABLE `t_gws`  (
  `gws_id` int(11) NOT NULL AUTO_INCREMENT,
  `good_url_id` varchar(15) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `shop_url_id` varchar(15) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  PRIMARY KEY (`gws_id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 36 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of t_gws
-- ----------------------------
INSERT INTO `t_gws` VALUES (1, '368591', '108710');
INSERT INTO `t_gws` VALUES (2, '368592', '108710');
INSERT INTO `t_gws` VALUES (3, '368591', '108710');
INSERT INTO `t_gws` VALUES (4, '368591', '137391');
INSERT INTO `t_gws` VALUES (5, '368592', '108710');
INSERT INTO `t_gws` VALUES (6, '368592', '137391');
INSERT INTO `t_gws` VALUES (7, '368593', '1356393');
INSERT INTO `t_gws` VALUES (8, '368593', '137391');
INSERT INTO `t_gws` VALUES (9, '368595', '1356393');
INSERT INTO `t_gws` VALUES (10, '368595', '1356415');
INSERT INTO `t_gws` VALUES (11, '368594', '1356393');
INSERT INTO `t_gws` VALUES (12, '368594', '137391');
INSERT INTO `t_gws` VALUES (13, '368596', '1356393');
INSERT INTO `t_gws` VALUES (14, '368596', '137391');
INSERT INTO `t_gws` VALUES (15, '368699', '1356638');
INSERT INTO `t_gws` VALUES (16, '368699', '1356653');
INSERT INTO `t_gws` VALUES (17, '368700', '1356638');
INSERT INTO `t_gws` VALUES (18, '368704', '1356633');
INSERT INTO `t_gws` VALUES (19, '368706', '1356650');
INSERT INTO `t_gws` VALUES (20, '374244', '1356633');
INSERT INTO `t_gws` VALUES (21, '374245', '1356638');
INSERT INTO `t_gws` VALUES (22, '368618', '1356441');
INSERT INTO `t_gws` VALUES (23, '368618', '1356452');
INSERT INTO `t_gws` VALUES (24, '368621', '1356447');
INSERT INTO `t_gws` VALUES (25, '368623', '1356441');
INSERT INTO `t_gws` VALUES (26, '368596', '1356452');
INSERT INTO `t_gws` VALUES (27, '368597', '137463');
INSERT INTO `t_gws` VALUES (28, '368597', '108648');
INSERT INTO `t_gws` VALUES (29, '368602', '137463');
INSERT INTO `t_gws` VALUES (30, '368602', '108648');
INSERT INTO `t_gws` VALUES (31, '368598', '137463');
INSERT INTO `t_gws` VALUES (32, '368598', '108648');
INSERT INTO `t_gws` VALUES (33, '368599', '137463');
INSERT INTO `t_gws` VALUES (34, '368599', '108648');
INSERT INTO `t_gws` VALUES (35, '368615', '22079');

SET FOREIGN_KEY_CHECKS = 1;
