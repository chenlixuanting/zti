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

 Date: 13/12/2019 21:33:37
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for t_good
-- ----------------------------
DROP TABLE IF EXISTS `t_good`;
CREATE TABLE `t_good`  (
  `good_id` int(11) NOT NULL AUTO_INCREMENT,
  `place_url_id` varchar(30) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `good_url_id` varchar(30) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `good_name` varchar(30) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `introduction` text CHARACTER SET utf8 COLLATE utf8_general_ci,
  `like_num` varchar(5) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  PRIMARY KEY (`good_id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 21 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of t_good
-- ----------------------------
INSERT INTO `t_good` VALUES (1, 'guilin28', '368591', '三花酒', '三花酒是以漓江水和优质大米酿造，蒸馏而成，是桂林名酒。其色清澈透明，味蜜香清雅，入口柔绵，回味爽冽。以象山牌和桂林牌为上品。', '3');
INSERT INTO `t_good` VALUES (2, 'guilin28', '368592', '豆腐乳', '桂林豆腐乳是白腐乳的代表。以黄豆为主要原料制成的，分有五香腐乳和辣椒腐乳两种。它的特点是皮薄肉嫩，质地幼细，味道鲜美，辣中有甜，甜中喷香，香中又能品辨出川椒、桂酊、八角、蒜泥以及三花酒的混合馥郁，可以说是滋味无穷。以花桥牌和象山牌为上品。', '2');
INSERT INTO `t_good` VALUES (3, 'guilin28', '368593', '桂林辣椒酱', '桂林辣椒酱是选用优质红辣椒、大蒜头等剁碎，拌入豆豉，加入三花酒和细盐等，密封入坛，数月之后始成。因配料有别而品种有异。以大蒜头为配料的是蒜蓉辣椒酱。再加入豆豉就成为豆豉辣椒酱。桂林辣椒酱油润鲜辣，香醇可口，既可食用提味，还可作调味用。以花桥牌为上品。', '2');
INSERT INTO `t_good` VALUES (4, 'guilin28', '368595', '桂花马蹄糕', '马蹄糕是桂林的特产之一，入口即化，味甜而不腻，是非常受欢迎的桂林特产之一。马蹄的学名为荸荠。桂林马蹄与众不同，其肉质雪白细滑，水份含量高，清甜无渣，爽脆可口。马蹄熟食可作菜，炒鸡、鸭时可作配菜，有香菇、云耳同炒别具一番滋味。', '2');
INSERT INTO `t_good` VALUES (5, 'guilin28', '368594', '罗汉果', '罗汉果是桂林地区特产。素有神仙果之称。其果实中含有丰富的葡萄糖、果糖和多种维生素，有清热解暑、化痰止咳、凉血舒骨、清肺润肠和生津止渴等功效。', '1');
INSERT INTO `t_good` VALUES (6, 'guilin28', '368596', '壮锦', '广西壮族著名的手工艺品，桂林壮族妇女极其擅长。用各种颜色的丝绒和细纱精心织造而成。壮锦多以壮族地区的动物图形为图案，织工精巧，线条简练而明快，粗圹而别致，且色彩绚丽，具有浓郁的民族特色。', '1');
INSERT INTO `t_good` VALUES (7, 'beihai140', '368699', '南珠', '北海盛产“南珠”，有“南珠之乡”之称。所产“南珠”以凝重结实、硕大圆润、晶莹夺目、光泽耐久而驰名中外，自古享有“东珠不如西珠，西珠不如南珠”的盛誉。一直是外地游客热衷购买的特产之首。', '4');
INSERT INTO `t_good` VALUES (8, 'beihai140', '368700', '海洋工艺品', '有贝雕、珍珠项链、手链、贝壳风铃、手机链等，样式齐全，色彩斑斓，是一种特色精致的挂摆饰品，适合做纪念品留念或送朋友。在老街等景点处都有散摊摆卖', '1');
INSERT INTO `t_good` VALUES (9, 'beihai140', '368704', '花刺参', '北海产的海参以花刺参为主。主要产地在涠洲岛。刺参营养丰富，久负盛名，远销国内外，是中国海产八珍之一。', '1');
INSERT INTO `t_good` VALUES (10, 'beihai140', '368706', '越南商品', '北海因为靠近越南，市面上很多经营越南商品的店铺。售卖有越南咖啡、香水、橡胶制品和红木雕饰、海柳烟嘴等。', '2');
INSERT INTO `t_good` VALUES (11, 'beihai140', '374244', '鱿鱼丝', '广西北海是北部湾畔的一颗明珠，这里的海洋资源丰富，是中国四大渔港之一，以盛产优质无污染的鱿鱼、墨鱼、虾仁、沙虫、瑶柱、鳗鱼、海蛇、银鱼、马鲛鱼、各式鱼脯、鱼柳等，而闻名全国及东盟各地。“纯净海”系列海味货真价实，是在本地很受欢迎的品牌，其干海味在捕获后即时在船上加工，既保持了海产品的营养价值、又不失生猛海鲜的原始风味，是馈赠亲朋的首选佳品。', '1');
INSERT INTO `t_good` VALUES (12, 'beihai140', '374245', '贝雕', '贝雕取材于海底贝壳，经修饰粘贴而成，造型独特，栩栩如生。现已开发的产品有：贝雕画、贝雕电子钟、贝雕屏风、贝雕人造花、贝雕珍宝盆等。', '0');
INSERT INTO `t_good` VALUES (13, 'nanning166', '368615', '壮锦', '壮锦是壮族的一种瑰丽工艺品，它与湘绣、蜀锦齐名，驰名中外。传说壮锦是在宋代一名叫达尼妹的壮族姑娘，看到蜘蛛网上的露珠在阳光照耀下闪烁着异彩，从中得到启示。她用五光十色的丝线为纬，原色细纱为经，精心纺织而成。从此就产生了瑰丽的壮锦。', '0');
INSERT INTO `t_good` VALUES (14, 'nanning166', '368618', '绣球', '绣球本是壮族地区青年男女定情信物，绣球以彩绸制成，直径约6厘米，内装豆类或沙子，底部缀有十多条穗带，球顶连着一根长约60厘米的飘带。在歌圩上，如发现情投意合者，女方便用绣球向男方抛去，借此表达爱情。', '0');
INSERT INTO `t_good` VALUES (15, 'nanning166', '368621', '黄皮酱', '南宁传统食品，用黄皮果制成，酸甜适度的一种果酱，可以用于配鱼肉、送面包、拌米粉、调稀粥食用，味道甘美，且能刺激食欲 。', '1');
INSERT INTO `t_good` VALUES (16, 'nanning166', '368623', '姜晶', '姜晶是一种老姜磨制的冲剂，体寒或是感冒的人，冲一杯喝上，则能通体温暖，缓解感冒症状。', '0');
INSERT INTO `t_good` VALUES (17, 'yangshuo702', '368597', '阳朔画扇', '阳朔画扇选料考究，工艺精致，画面内容有桂林山水、阳朔风光、花鸟虫鱼、奔马猛兽、古装仕 女等各类古今题材，全部由本乡本土的农民画家创作并手工绘制，画扇以此而名。在画的正面、 反面或周边配以诗词、书法、篆印，即成为集诗、书、画、刻于一体的旅游工艺器和纪念器。小者盈尺，大者1米～2米不等。画扇以当地楠竹为骨，以宣纸或绢帛为面，经画、染、裱、糊、穿、漆等工序制作而成。', '1');
INSERT INTO `t_good` VALUES (18, 'yangshuo702', '368602', '辣椒酱', '辣椒酱是桂林阳朔很爱吃的调料。在阳朔及桂林的路边小摊都有卖，现场制作，辣椒和大蒜剁碎混溶，很够味。也可在西街上买小吃型的干辣椒，真空包装，香脆微辣，可直接食用，适合下酒。', '1');
INSERT INTO `t_good` VALUES (19, 'yangshuo702', '368598', '柿饼', '月柿是广西传统出口创汇的名优产品之一，其在阳朔县已有四百年的栽培、加工历史。阳朔月柿果型美观、色泽鲜艳、个大皮薄、肉厚无核。脆柿味甜可口，冻柿清香甜蜜，柿饼甘柔如饴、形似圆月，果肉透明、肉质柔软、清甜芳香。柿饼断面呈金黄半透明胶质状，具有柔软、清香、凉爽、甜美等风味，食之口舌生津，有沁人心脾之感。', '0');
INSERT INTO `t_good` VALUES (20, 'yangshuo702', '368599', '阳朔红皮栗', '红皮栗又称阳朔板栗。阳朔是广西产板栗最多的县，中果红板栗品质最好, 主产于阳朔平洞口、古板等地。果皮赤褐色, 有油亮光泽; 质重、饱满、颗粒大, 果肉味甜, 细腻, 带清香。是广西传统出口商口之一。生食清香脆口, 熟食常用于包粽子、蒸年糕、做八宝饭、焖肉等。沙爆板栗, 具有特别的香甜味。', '0');

SET FOREIGN_KEY_CHECKS = 1;