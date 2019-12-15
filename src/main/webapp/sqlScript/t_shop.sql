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

 Date: 13/12/2019 21:33:45
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for t_shop
-- ----------------------------
DROP TABLE IF EXISTS `t_shop`;
CREATE TABLE `t_shop`  (
  `shop_id` int(11) NOT NULL AUTO_INCREMENT,
  `shop_url_id` varchar(15) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `shop_name` varchar(30) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `shop_score` varchar(5) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  `comment_num` varchar(10) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  `shop_link` varchar(60) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  PRIMARY KEY (`shop_id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 15 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of t_shop
-- ----------------------------
INSERT INTO `t_shop` VALUES (1, '108710', '微笑堂商厦', '4.3', ' (84条点评) ', '/shopping/guilin28/108710.html');
INSERT INTO `t_shop` VALUES (2, '137391', '桂林八桂大厦', '4.2', ' (31条点评) ', '/shopping/guilin28/137391.html');
INSERT INTO `t_shop` VALUES (3, '1356393', '万客隆购物广场', '4.3', ' (28条点评) ', '/shopping/guilin28/1356393.html');
INSERT INTO `t_shop` VALUES (4, '1356415', '金顺昌特产店', '4.1', ' (27条点评) ', '/shopping/guilin28/1356415.html');
INSERT INTO `t_shop` VALUES (5, '1356638', '南珠宫(北部湾中路店)', '4.4', ' (34条点评) ', '/shopping/beihai140/1356638.html');
INSERT INTO `t_shop` VALUES (6, '1356653', '月升珍珠', '4.3', ' (29条点评) ', '/shopping/beihai140/1356653.html');
INSERT INTO `t_shop` VALUES (7, '1356633', '北海市水产市场', '4.3', ' (273条点评) ', '/shopping/beihai140/1356633.html');
INSERT INTO `t_shop` VALUES (8, '1356650', '本地人越南特产', '4.3', ' (46条点评) ', '/shopping/beihai140/1356650.html');
INSERT INTO `t_shop` VALUES (9, '1356441', '南宁百货大楼', '4.4', ' (166条点评) ', '/shopping/nanning166/1356441.html');
INSERT INTO `t_shop` VALUES (10, '1356452', '西关路夜市', '4.3', ' (135条点评) ', '/shopping/nanning166/1356452.html');
INSERT INTO `t_shop` VALUES (11, '1356447', '朝阳路', '4.3', ' (159条点评) ', '/shopping/nanning166/1356447.html');
INSERT INTO `t_shop` VALUES (12, '137463', '万客隆购物广场', '4.3', ' (24条点评) ', '/shopping/yangshuo702/137463.html');
INSERT INTO `t_shop` VALUES (13, '108648', '99自选商场(叠翠路)', '4.2', ' (31条点评) ', '/shopping/yangshuo702/108648.html');
INSERT INTO `t_shop` VALUES (14, '22079', '西街', '4.3', ' (999+条点评)', '/shopping/yangshuo702/22079.html');

SET FOREIGN_KEY_CHECKS = 1;
