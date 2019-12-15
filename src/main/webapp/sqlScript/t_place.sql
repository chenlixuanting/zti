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

 Date: 12/12/2019 21:19:03
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for t_place
-- ----------------------------
DROP TABLE IF EXISTS `t_place`;
CREATE TABLE `t_place`  (
  `place_id` int(11) NOT NULL AUTO_INCREMENT COMMENT '地方id',
  `place_name` varchar(20) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL COMMENT '地方名称',
  `place_url_id` varchar(30) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  PRIMARY KEY (`place_id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 90 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of t_place
-- ----------------------------
INSERT INTO `t_place` VALUES (1, '桂林', 'guilin28');
INSERT INTO `t_place` VALUES (2, '北海', 'beihai140');
INSERT INTO `t_place` VALUES (3, '南宁', 'nanning166');
INSERT INTO `t_place` VALUES (4, '阳朔', 'yangshuo702');
INSERT INTO `t_place` VALUES (5, '柳州', 'liuzhou143');
INSERT INTO `t_place` VALUES (6, '龙胜', 'longsheng1445120');
INSERT INTO `t_place` VALUES (7, '贺州', 'hezhou707');
INSERT INTO `t_place` VALUES (8, '百色', 'baise524');
INSERT INTO `t_place` VALUES (9, '崇左', 'chongzuo837');
INSERT INTO `t_place` VALUES (10, '梧州', 'wuzhou142');
INSERT INTO `t_place` VALUES (11, '兴安县', 'xingan722');
INSERT INTO `t_place` VALUES (12, '灵山', 'lingshan969');
INSERT INTO `t_place` VALUES (13, '东兴', 'dongxing964');
INSERT INTO `t_place` VALUES (14, '平乐', 'pingle3065');
INSERT INTO `t_place` VALUES (15, '德保', 'debao3061');
INSERT INTO `t_place` VALUES (16, '融水', 'rongshui3047');
INSERT INTO `t_place` VALUES (17, '巴马', 'bama3041');
INSERT INTO `t_place` VALUES (18, '北流', 'beiliu3045');
INSERT INTO `t_place` VALUES (19, '桂平', 'guiping418');
INSERT INTO `t_place` VALUES (20, '靖西', 'jingxi967');
INSERT INTO `t_place` VALUES (21, '三江', 'sanjiang975');
INSERT INTO `t_place` VALUES (22, '横县', 'hengxian966');
INSERT INTO `t_place` VALUES (23, '藤县', 'tengxian143827');
INSERT INTO `t_place` VALUES (24, '灵川', 'lingchuan3064');
INSERT INTO `t_place` VALUES (25, '玉林', 'yulin141');
INSERT INTO `t_place` VALUES (26, '全州', 'quanzhou3040');
INSERT INTO `t_place` VALUES (27, '苍梧', 'cangwu3052');
INSERT INTO `t_place` VALUES (28, '乐业', 'leye968');
INSERT INTO `t_place` VALUES (29, '防城港', 'fangchenggang698');
INSERT INTO `t_place` VALUES (30, '金秀', 'jinxiu1445186');
INSERT INTO `t_place` VALUES (31, '凤山', 'fengshan2022');
INSERT INTO `t_place` VALUES (32, '河池', 'hechi838');
INSERT INTO `t_place` VALUES (33, '资源', 'ziyuan980');
INSERT INTO `t_place` VALUES (34, '平南', 'pingnan1398');
INSERT INTO `t_place` VALUES (35, '岑溪', 'cenxi3056');
INSERT INTO `t_place` VALUES (36, '凭祥', 'pingxiang840');
INSERT INTO `t_place` VALUES (37, '昭平', 'zhaoping3067');
INSERT INTO `t_place` VALUES (38, '蒙山', 'mengshan3057');
INSERT INTO `t_place` VALUES (39, '隆安', 'longan3042');
INSERT INTO `t_place` VALUES (40, '钦州', 'qinzhou697');
INSERT INTO `t_place` VALUES (41, '上林', 'shanglin120117');
INSERT INTO `t_place` VALUES (42, '合浦', 'hepu965');
INSERT INTO `t_place` VALUES (43, '南丹', 'nadan3059');
INSERT INTO `t_place` VALUES (44, '大新', 'daxin963');
INSERT INTO `t_place` VALUES (45, '容县', 'rongxian3044');
INSERT INTO `t_place` VALUES (46, '荔浦', 'lipu2020');
INSERT INTO `t_place` VALUES (47, '贵港', 'guigang711');
INSERT INTO `t_place` VALUES (48, '宾阳', 'binyang3048');
INSERT INTO `t_place` VALUES (49, '来宾', 'laibin839');
INSERT INTO `t_place` VALUES (50, '象州', 'xiangzhou3060');
INSERT INTO `t_place` VALUES (51, '柳城', 'liucheng3072');
INSERT INTO `t_place` VALUES (52, '鹿寨', 'luqian3054');
INSERT INTO `t_place` VALUES (53, '富川', 'fuchuan1446258');
INSERT INTO `t_place` VALUES (54, '都安', 'duan3063');
INSERT INTO `t_place` VALUES (55, '恭城', 'gongcheng1446252');
INSERT INTO `t_place` VALUES (56, '陆川', 'luchuan971');
INSERT INTO `t_place` VALUES (57, '平果', 'pingguo3062');
INSERT INTO `t_place` VALUES (58, '龙州', 'longzhou3046');
INSERT INTO `t_place` VALUES (59, '博白', 'bobai3049');
INSERT INTO `t_place` VALUES (60, '宁明', 'ningming1445085');
INSERT INTO `t_place` VALUES (61, '东兰', 'donglan120136');
INSERT INTO `t_place` VALUES (62, '凌云', 'lingyun1446254');
INSERT INTO `t_place` VALUES (63, '融安', 'rongan3043');
INSERT INTO `t_place` VALUES (64, '罗城', 'luocheng3050');
INSERT INTO `t_place` VALUES (65, '永福', 'yongfu1445352');
INSERT INTO `t_place` VALUES (66, '钟山', 'zhongshan3070');
INSERT INTO `t_place` VALUES (67, '扶绥', 'furui3068');
INSERT INTO `t_place` VALUES (68, '大化', 'dahua1446251');
INSERT INTO `t_place` VALUES (69, '天峨', 'tiane3051');
INSERT INTO `t_place` VALUES (70, '合山', 'heshan3053');
INSERT INTO `t_place` VALUES (71, '忻城', 'xincheng1446259');
INSERT INTO `t_place` VALUES (72, '浦北', 'pubei3069');
INSERT INTO `t_place` VALUES (73, '环江', 'huanjiang3058');
INSERT INTO `t_place` VALUES (74, '马山', 'mashan1446255');
INSERT INTO `t_place` VALUES (75, '那坡', 'napo973');
INSERT INTO `t_place` VALUES (76, '西林', 'xilin1446256');
INSERT INTO `t_place` VALUES (77, '天等', 'tiandeng3055');
INSERT INTO `t_place` VALUES (78, '兴业', 'xingye1446257');
INSERT INTO `t_place` VALUES (79, '上思', 'shangsi1446253');
INSERT INTO `t_place` VALUES (80, '灌阳', 'guanyang3071');
INSERT INTO `t_place` VALUES (81, '武宣', 'wuxuan1446260');

SET FOREIGN_KEY_CHECKS = 1;
