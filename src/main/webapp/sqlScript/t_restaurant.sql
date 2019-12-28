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

 Date: 13/12/2019 16:41:39
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for t_restaurant
-- ----------------------------
DROP TABLE IF EXISTS `t_restaurant`;
CREATE TABLE `t_restaurant`  (
  `restaurant_id` int(11) NOT NULL AUTO_INCREMENT,
  `restaurant_url_id` varchar(20) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `restaurant_name` varchar(20) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `score` varchar(5) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  `address` varchar(50) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  `introduction` varchar(200) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  `link` varchar(60) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  PRIMARY KEY (`restaurant_id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 100 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of t_restaurant
-- ----------------------------
INSERT INTO `t_restaurant` VALUES (1, '126481', '崇善米粉(依仁路店)', ' 3.9', ' 依仁路步行街5号', ' 桂林很有名的米粉店，在桂林和周边县城都开有许多分店。这家店位于桂林正阳路步行街一带，经常出现顾...', '/food/guilin28/126481.html');
INSERT INTO `t_restaurant` VALUES (2, '453395', '芙蓉米粉店', ' 0.0', ' 芙蓉路7号(近县政府)', ' 芙蓉街上的米粉店离客栈很近，价格平易近人，当地人吃的挺多。骨头汤自己加，酸豆角、酸笋、酸萝卜等...', '/food/guilin28/453395.html');
INSERT INTO `t_restaurant` VALUES (3, '5584895', '乱了粉库桂林米粉', ' 4.4', ' 正阳步行街142号(正阳坑川妹火锅斜对面)', ' 乱了粉库桂林米粉的菜式以米粉为主，有别于在桂林随处可见的街边小店，这里对于米粉有另外一种解释。...', '/food/guilin28/5584895.html');
INSERT INTO `t_restaurant` VALUES (4, '8626068', '唐家米粉百年老店(文明路店)', ' 4.5', ' 文明路18号1-6(象鼻山景区旁文昌桥头红绿灯交警岗亭对面)', ' 主打当地特色的米粉店，餐厅位于桂林市中心，且毗邻象山风景区。店内环境简单，也非常接地气，关晓彤...', '/food/guilin28/8626068.html');
INSERT INTO `t_restaurant` VALUES (5, '5577731', '同来馆米粉(铁西店)', ' 4.1', ' 通泉巷崇善米粉旁', ' 同来米粉在当地非常有名，在这里能尝到地道的桂林米粉。这家店面平平淡淡，店内却挂满了许多荣誉奖牌...', '/food/guilin28/5577731.html');
INSERT INTO `t_restaurant` VALUES (6, '5577488', '瘦子桂林米粉店', ' 4.3', ' 城中路21号(近叠翠路)', ' 阳朔颇有名气的米粉店，算得上是当地的老店了，虽然店面简洁甚至不起眼，但每天总有很多游客以及当地...', '/food/yangshuo702/5577488.html');
INSERT INTO `t_restaurant` VALUES (7, '126100', '桂林粥城漓江菜(杉湖店)', ' 4.3', ' 杉湖北路4号1-2层', ' 在桂林城内非常有名的广西菜和广东菜餐厅，位置就在漓江大瀑布酒店旁边，非常适合游玩回来吃饭或是吃...', '/food/guilin28/126100.html');
INSERT INTO `t_restaurant` VALUES (8, '5577485', '桂林人旺角美食·汇', ' 3.8', ' 中山中路26号', ' 算是美食广场性质的当地菜了。各种小吃、菜肴分碟摆好，卖相甚是不错，可以依据自己的喜好来选择，也...', '/food/guilin28/5577485.html');
INSERT INTO `t_restaurant` VALUES (9, '126103', '阿甘酒家(中山中路店)', ' 4.3', ' 中山中路宜昌酒店2楼餐厅', ' 桂林很有名气的当地菜馆，在市内有许多连锁店，饭菜量很大，味道也很地道。旱蒸剑骨鱼和腊味芋头丝最...', '/food/guilin28/126103.html');
INSERT INTO `t_restaurant` VALUES (10, '11106914', '原生態農家飯', ' 2.0', ' 十里画廊景区大榕树附近青厄渡码头', ' ', '/food/guilin28/11106914.html');
INSERT INTO `t_restaurant` VALUES (11, '16536123', '渔夫啤酒鱼(西街店)', ' 5.0', ' 益田西街118号铺星巴克旁', ' ', '/food/guilin28/16536123.html');
INSERT INTO `t_restaurant` VALUES (12, '126237', '老根农家饭店', ' 4.3', ' C027道旧县村(近遇龙河)', ' 老根农家饭店是阳朔旧县村有名气的农家菜馆，遇龙河漂流上岸后可以坐这家饭店的接送车去吃饭，这里提...', '/food/yangshuo702/126237.html');
INSERT INTO `t_restaurant` VALUES (13, '453348', '桂花飘农家饭', ' 4.5', ' 阳朔新321国道.瑞盛国际度假区对面(月亮山赏月景区后门直进600米)', ' 月亮山附近的农家乐餐厅坐落在小木屋里，位置比较偏僻，但环境挺好，池中荷花景色宜人。黄焖土鸡据说...', '/food/guilin28/453348.html');
INSERT INTO `t_restaurant` VALUES (14, '15840103', '覃妈啤酒鱼', ' 5.0', ' 神山路县医院北行50米', ' ', '/food/guilin28/15840103.html');
INSERT INTO `t_restaurant` VALUES (15, '11781851', '桂记漓江鱼家常菜馆', ' 3.9', ' 新西街D栋119号', ' ', '/food/guilin28/11781851.html');
INSERT INTO `t_restaurant` VALUES (16, '16535726', '117#漓江鱼馆', ' 0.0', ' 阳朔新西街D栋117号', ' ', '/food/guilin28/16535726.html');
INSERT INTO `t_restaurant` VALUES (17, '11781820', '梅姐漓江啤酒鱼', ' 3.5', ' 阳光100西街E101号', ' ', '/food/guilin28/11781820.html');
INSERT INTO `t_restaurant` VALUES (18, '15528412', '添福楼素食会所', ' 4.5', ' 东镇路1号木龙湖景区1号楼', ' 添福楼素食会馆坐落于桂林市区北侧的木龙湖景区内，是桂林当地很有特色的一家素食自助餐厅，2011年成...', '/food/guilin28/15528412.html');
INSERT INTO `t_restaurant` VALUES (19, '4926084', '小南国(文明店)', ' 4.5', ' 文明路3号李宗仁官邸对面', ' 小南国是桂林颇有名气的当地菜馆，这里能吃到比较正宗的桂林菜，菜的味道都很不错，性价比也很高。这...', '/food/guilin28/4926084.html');
INSERT INTO `t_restaurant` VALUES (20, '5578538', '瑶妃油茶餐馆(古南门店)', ' 4.5', ' 榕荫路1号(古南门旁)', ' 餐厅位于静谧优雅的桂林两江四湖景区，依傍在榕湖古南门旁。这里的谷雨油茶集汤、饮品、茶一体，色香...', '/food/guilin28/5578538.html');
INSERT INTO `t_restaurant` VALUES (21, '11101798', '西街味道', ' 4.5', ' 桂花桥西街98号(桂花桥头麦当劳对面)', ' 西街味道位于阳朔西街，地理位置优越，装修简约，服务优质。菜品主要以广西家常菜为主，在注重保留传...', '/food/guilin28/11101798.html');
INSERT INTO `t_restaurant` VALUES (22, '5577762', '大师傅金奖啤酒鱼(西街中心店)', ' 3.4', ' 西街步行街117号', ' 开在西街上满满的啤酒鱼店，这家人气算是很旺的了。啤酒鱼炖在锅里，加着大块西红柿、青椒，用汁拌着...', '/food/guilin28/5577762.html');
INSERT INTO `t_restaurant` VALUES (23, '5577840', '马姐斑鱼店(府前巷店)', ' 4.6', ' 府前巷27号(懒人堂客栈旁巷子内)', ' 马姐斑鱼店是一家专做斑鱼火锅的餐馆，虽然这家店的店面不那么气派，但这里的斑鱼火锅味道却是相当惊...', '/food/guilin28/5577840.html');
INSERT INTO `t_restaurant` VALUES (24, '12644829', '渔太泰·漓江小馆(西街店)', ' 5.0', ' 桂花路11号(碧莲人家客栈旁，原漓江料理)', ' ', '/food/guilin28/12644829.html');
INSERT INTO `t_restaurant` VALUES (25, '5584910', '大师傅啤酒鱼·音乐餐厅(体验店)', ' 4.1', ' 叠翠路12号(漓江边、白玉兰酒店对面)', ' ', '/food/guilin28/5584910.html');
INSERT INTO `t_restaurant` VALUES (26, '126233', '椿记烧鹅(中山店)', ' 4.7', ' 中山中路2号中山大酒店旁', ' 椿记是桂林非常有名的餐馆，这里的菜揉合了湘粤菜系及桂林地方风味的特色，其中烧鹅是招牌菜，以皮脆...', '/food/guilin28/126233.html');
INSERT INTO `t_restaurant` VALUES (27, '126116', '金龙寨桂人居', ' 4.3', ' 文明路8号(杉湖双塔侧，近李宗仁官邸)', ' 金龙寨是桂林比较老牌的广西菜餐馆，市内有多家分店，生意都不错。这家店就位于杉湖公园旁边，吃完还...', '/food/guilin28/126116.html');
INSERT INTO `t_restaurant` VALUES (28, '126109', '阿甘酒家(依仁路店)', ' 4.1', ' 依仁路17号1楼餐厅', ' 作为桂林名店之一，他们的招牌菜，酸萝卜炒双脆，阿甘炖菜，腊味芋头都非常好吃。', '/food/guilin28/126109.html');
INSERT INTO `t_restaurant` VALUES (29, '4926336', '大师傅金奖啤酒鱼(西街口总店)', ' 4.1', ' 西街口右第一家(必胜客一楼)', ' 阳朔做啤酒鱼很出名的饭店，还曾上过CCTV的《天天饮食》节目，其他菜味道也很不错， 钢管鸡、阳朔田螺...', '/food/yangshuo702/4926336.html');
INSERT INTO `t_restaurant` VALUES (30, '15304977', '大师傅金奖啤酒鱼(西街老店)', ' 3.3', ' 蟠桃路西街口1号二至三层(西街口天桥左第一家)', ' ', '/food/guilin28/15304977.html');
INSERT INTO `t_restaurant` VALUES (31, '15237563', '桂客膳房', ' 4.4', ' 解放东路2号柏丽商务酒店一楼(近解放桥、逍遥楼、东西巷)', ' 这家餐厅位于解放桥头，名字取自“贵客”的谐音。装修比较有特色，大厅豪华明亮，气派十足；包厢则是...', '/food/guilin28/15237563.html');
INSERT INTO `t_restaurant` VALUES (32, '4926104', '味香馆', ' 3.7', ' 正阳路步行街桂林体育馆对面(原聚福林)', ' 餐厅坐落在正阳步行街上，主打当地特色菜品，地理位置不错，而且装修古香古色，非常醒目。进店就能看...', '/food/guilin28/4926104.html');
INSERT INTO `t_restaurant` VALUES (33, '16081786', '小渔椿私房菜馆', ' 3.9', ' 阳朔西街周边荆凤南路16号(石马圆盘信用社往荆垭隧道20米)', ' ', '/food/guilin28/16081786.html');
INSERT INTO `t_restaurant` VALUES (34, '5577927', '王城醋血鸭', ' 4.1', ' 滨江路商住楼3栋(近漓江)', ' 这里主打桂林的地方菜肴醋血鸭。餐厅开了些许年头了，却依旧干净舒适。醋血鸭上桌时，醋香四溢，非常...', '/food/guilin28/5577927.html');
INSERT INTO `t_restaurant` VALUES (35, '11782105', '江悦楼饭店', ' 0.0', ' 古镇步行街老地方北200米', ' ', '/food/guilin28/11782105.html');
INSERT INTO `t_restaurant` VALUES (36, '126636', '霍少爷农家馆', ' 4.1', ' 高田镇竹兜寨大榕树风景区', ' 都是当地特色，农家菜。红烧啤酒鱼是他家的特色，几乎没桌都要，很入味，鲜嫩。农家竹筒饭味道也不错...', '/food/guilin28/126636.html');
INSERT INTO `t_restaurant` VALUES (37, '11200200', '荣世海鲜大排档', ' 4.2', ' 长青路6号领袖一方1层0135号', ' ', '/food/beihai140/11200200.html');
INSERT INTO `t_restaurant` VALUES (38, '125461', '长青路小吃街', ' 3.0', ' 长青路', ' 集中了东北街边烧烤的小吃街环境不敢恭维，烧烤的品种不少，价格便宜，但口味一般。比较令人讨厌的是...', '/food/beihai140/125461.html');
INSERT INTO `t_restaurant` VALUES (39, '7575138', '好食来海鲜小排档(侨港总店)', ' 4.5', ' 侨港镇港口路', ' 北海颇有名气的海鲜排档，生意非常好，各种海鲜味道都不错，尤其是煎鱿鱼、蒜蓉沙虫、皮皮虾很受欢迎...', '/food/beihai140/7575138.html');
INSERT INTO `t_restaurant` VALUES (40, '7573813', '真味馆', ' 4.7', ' 金海岸大道5号银滩海尊大厦0108号', ' 位于港口路上的一家海鲜排档，虽然门面不大、环境也一般，但海鲜相当新鲜美味，价格也公道实惠，吃得...', '/food/beihai140/7573813.html');
INSERT INTO `t_restaurant` VALUES (41, '7573620', '覃记海鲜美食餐厅', ' 4.7', ' 长青路领秀一方大楼一楼商铺(钢管厂五区小郡肝火锅串串香隔壁)', ' ', '/food/beihai140/7573620.html');
INSERT INTO `t_restaurant` VALUES (42, '7575338', '渔鱼小海鲜', ' 4.3', ' 银滩中路和美酒店旁', ' ', '/food/beihai140/7575338.html');
INSERT INTO `t_restaurant` VALUES (43, '7574640', '华侨佬海鲜大排档', ' 4.3', ' 侨港海滩路海大酒店斜对面', ' ', '/food/beihai140/7574640.html');
INSERT INTO `t_restaurant` VALUES (44, '7574555', '花卢海鲜小炒', ' 4.5', ' 侨港海滩旁侨港镇港口路5路公交车终点站上20米(大洋冷冻厂正对面)', ' ', '/food/beihai140/7574555.html');
INSERT INTO `t_restaurant` VALUES (45, '454681', '侨越世家越南卷粉', ' 3.8', ' 侨港镇风情街24栋糖水斜对面', ' 出品越南卷粉的小店，在当地生意不错，鸡肉香菇、叉烧马蹄和虾仁瘦肉蘸着酸酸甜甜的蘸料一起吃，味道...', '/food/beihai140/454681.html');
INSERT INTO `t_restaurant` VALUES (46, '7574196', '越南特色小吃·越南蟹仔粉', ' 3.5', ' 侨港风情街(提拉米苏蛋糕店旁)', ' 当地很有口碑的蟹仔粉店，选用当地特产的小螃蟹，取出蟹膏熬制，煮好的蟹汤和米粉中加入鱼露或虾膏，...', '/food/beihai140/7574196.html');
INSERT INTO `t_restaurant` VALUES (47, '15159503', '有间糖水铺(前进路店)', ' 5.0', ' 前进路第三中学对面', ' ', '/food/beihai140/15159503.html');
INSERT INTO `t_restaurant` VALUES (48, '125578', '港湾糖水', ' 4.6', ' 侨港镇侨南路29号(近侨港市场)', ' 侨港镇糖水一条街上的实惠小店，晚上7点以后才开门营业，品种丰富，价格比市区便宜不少。因为生意很好...', '/food/beihai140/125578.html');
INSERT INTO `t_restaurant` VALUES (49, '7575347', '状元糖水铺', ' 4.4', ' 海珠海东路224号', ' ', '/food/beihai140/7575347.html');
INSERT INTO `t_restaurant` VALUES (50, '15675105', '周记蟹仔粉', ' 4.0', ' 小港北二路10号', ' ', '/food/beihai140/15675105.html');
INSERT INTO `t_restaurant` VALUES (51, '125575', '李姨虾饼店', ' 4.2', ' 珠海路北海老街基督教堂对面', ' 传说中好吃到爆的虾饼，老街上的人气摊位，据说还上过《舌尖上的中国》。虾饼是用小虾炸制，活蹦乱跳...', '/food/beihai140/125575.html');
INSERT INTO `t_restaurant` VALUES (52, '454353', '老伙记海鲜大排档(金海岸店)', ' 4.4', ' 金海岸大道与四川南路交口向东100米路南(近侨港)', ' 海鲜排挡的厨房是开放式的，可以看到厨师操作，吃起来挺放心，海鲜用料新鲜，蒸沙虫、蒸蟹等口感都很...', '/food/beihai140/454353.html');
INSERT INTO `t_restaurant` VALUES (53, '11172518', '陈记虾饼小食店', ' 4.5', ' 珠海西路57号', ' ', '/food/beihai140/11172518.html');
INSERT INTO `t_restaurant` VALUES (54, '4926709', '外沙疍家棚酒楼', ' 4.1', ' 外沙海鲜岛印尼餐饮区西区20栋', ' 当地较为老牌的海鲜食府，海鲜现点现杀，保证新鲜，但价格稍贵。晚上还有疍家风情歌舞表演。', '/food/beihai140/4926709.html');
INSERT INTO `t_restaurant` VALUES (55, '15674098', '鲨渔湾海鲜美食(银滩总店)', ' 4.7', ' 银滩中路广东路乐途酒店北50米', ' ', '/food/beihai140/15674098.html');
INSERT INTO `t_restaurant` VALUES (56, '16586196', '王氏高峰柠檬鸭(古城店)', ' 4.3', ' 万客来酒店2楼', ' ', '/food/nanning166/16586196.html');
INSERT INTO `t_restaurant` VALUES (57, '11476903', '丫丫厨娘柠檬鸭时尚餐厅(西关新天地店)', ' 4.2', ' 西关路2号西关新天地8层', ' 丫丫厨娘柠檬鸭时尚餐厅主营广西菜，内部装修有特色，整体光线偏暗。招牌柠檬鸭饭是桌桌必点的菜，配...', '/food/nanning166/11476903.html');
INSERT INTO `t_restaurant` VALUES (58, '4926860', '甘家界牌柠檬鸭店(园湖分店)', ' 4.4', ' 园湖路12-2号(夏威夷酒店旁)', ' 环境古色古香，到处都是绿意盎然，搭配木制的桌椅、蓝色布艺，非常有意境。甘家界柠檬鸭是店内招牌，...', '/food/nanning166/4926860.html');
INSERT INTO `t_restaurant` VALUES (59, '5451243', '桂小厨(万象城店)', ' 4.5', ' 民族大道136号万象城4层', ' 餐厅装修非常特别，古朴而富有当地特色，很有意境。主打广西菜，秘制老友鱼是店内招牌，是用店里秘制...', '/food/nanning166/5451243.html');
INSERT INTO `t_restaurant` VALUES (60, '12926656', '丫丫厨娘(航洋国际广场店)', ' 4.3', ' 民族大道131号(航洋国际购物中心4层)', ' ', '/food/nanning166/12926656.html');
INSERT INTO `t_restaurant` VALUES (61, '17040008', '丫丫厨娘(万达茂店)', ' 4.7', ' 良堤路6号万达茂商场3050号商铺', ' ', '/food/nanning166/17040008.html');
INSERT INTO `t_restaurant` VALUES (62, '294251', '中山路小吃街', ' 4.3', ' 中山路(东葛路口)', ' 南宁传统的美食一条街，云集南宁各式饮食店，这里有南宁人最爱吃的老友粉、粉饺、粥品、海鲜烧烤、酸...', '/food/nanning166/294251.html');
INSERT INTO `t_restaurant` VALUES (63, '293561', '米马河(竹塘路总店)', ' 4.4', ' 竹塘路32号', ' 当地人特别推荐的食店，店铺不大，食客也很多，味道好份量足。木桶猪手不愧是招牌，打开锡箔纸，一股...', '/food/nanning166/293561.html');
INSERT INTO `t_restaurant` VALUES (64, '7458434', '桂小厨(亭江店)', ' 4.3', ' 白沙大道20号南城百货江南购物中心2层', ' ', '/food/nanning166/7458434.html');
INSERT INTO `t_restaurant` VALUES (65, '11346246', '江南印象品位私房餐厅', ' 4.1', ' 民生路3号(鑫辉大厦2楼)', ' ', '/food/nanning166/11346246.html');
INSERT INTO `t_restaurant` VALUES (66, '7458425', '八桂坊餐厅', ' 4.2', ' 祥宾路63号满江红大酒店鸿雁鹅庄三楼(近金湖广场)', ' 这里主打地道广西菜肴，环境雅致，在暖黄的灯光照耀下，更显得温暖而宁和。坐在靠窗的位置，还可尽情...', '/food/nanning166/7458425.html');
INSERT INTO `t_restaurant` VALUES (67, '15452754', '梁记卷筒粉、粉饺', ' 4.4', ' 中山路245-1号', ' ', '/food/nanning166/15452754.html');
INSERT INTO `t_restaurant` VALUES (68, '5449750', '小嘟来食街(南宁饭店)', ' 3.2', ' 民生路38号(南宁饭店锦绣楼二层)', ' ', '/food/nanning166/5449750.html');
INSERT INTO `t_restaurant` VALUES (69, '5450087', '中山粉饺', ' 4.5', ' 中山路小吃街北(中山路小学斜对面)', ' 中山路的这家粉饺很出名，是很多南宁人从小吃到大的美食。弹韧的粉皮配上香菇木耳猪肉馅，淋上一勺热...', '/food/nanning166/5450087.html');
INSERT INTO `t_restaurant` VALUES (70, '5450454', '老甘粉饺', ' 4.6', ' 老水街泛宇邕江一品印象美食城外围', ' 百年老店，粉饺曾获广西“金牌小吃奖”。肉馅味道调配得相当的好，香菇和猪肉剁碎后搅拌在一起腌制，...', '/food/nanning166/5450454.html');
INSERT INTO `t_restaurant` VALUES (71, '5450974', '米马河酒楼(平湖旗舰店)', ' 4.5', ' 平湖路8号(近嘉园小区)', ' ', '/food/nanning166/5450974.html');
INSERT INTO `t_restaurant` VALUES (72, '293488', '复记老友(中山路店)', ' 4.2', ' 中山路237-2号', ' 南宁老牌老友粉店之一，和舒记齐名，环境卫生很一般，但很多人都是慕名而来。米粉滑爽筋道，弹性十足...', '/food/nanning166/293488.html');
INSERT INTO `t_restaurant` VALUES (73, '4926846', '舒记老友粉(七星路店)', ' 4.5', ' 七星路44号(第一人民医院斜对面)', ' 南宁的老牌老友粉店，经常去的时候都要排队。配料里酸笋的滋味也许外地人吃不惯，口味有些重，但吃起...', '/food/nanning166/4926846.html');
INSERT INTO `t_restaurant` VALUES (74, '7461231', '食党美食广场', ' 5.0', ' 朝阳路9号百盛步行街广场负一层', ' ', '/food/nanning166/7461231.html');
INSERT INTO `t_restaurant` VALUES (75, '5449971', '亚光老友粉', ' 4.0', ' 共和路(北宁街口)', ' ', '/food/nanning166/5449971.html');
INSERT INTO `t_restaurant` VALUES (76, '5450103', '舒记粉店(桃源店)', ' 4.0', ' 桃源路86号桃苑大厦86-6号', ' ', '/food/nanning166/5450103.html');
INSERT INTO `t_restaurant` VALUES (77, '7459149', '蓉李记成都名小吃(万象城店)', ' 4.4', ' 青秀区民族大道136号南宁华润中心万象城B1层B110号', ' ', '/food/nanning166/7459149.html');
INSERT INTO `t_restaurant` VALUES (78, '13824277', '四川香天下火锅(万象城店)', ' 3.9', ' 民族大道136号万象城2层(5号门旁)', ' 香天下餐厅位于民族大道万象城内，装修风格很是喜庆，让人有家的感觉。餐厅以火锅主打，菜品丰富，摆...', '/food/nanning166/13824277.html');
INSERT INTO `t_restaurant` VALUES (79, '15455179', '探鱼(盛天地店)', ' 4.4', ' 中越路8号盛天地购物中心A8号楼78-2号', ' ', '/food/nanning166/15455179.html');
INSERT INTO `t_restaurant` VALUES (80, '5450066', '快意饺子云吞(水街店)', ' 4.0', ' 水街石巷口40号', ' ', '/food/nanning166/5450066.html');
INSERT INTO `t_restaurant` VALUES (81, '453334', '老味道桂林米粉', ' 3.7', ' 阳朔镇神山路26号', ' 每次来阳朔必去这家，这家不用酸笋而是用酸黄瓜做小菜，锅烧炸的很好，腐竹也很有味道。米粉相对其他...', '/food/yangshuo702/453334.html');
INSERT INTO `t_restaurant` VALUES (82, '126034', '佬油条桂林米粉(十里画廊店)', ' 4.1', ' 抗战路191号', ' 一家很小的店，味道很好，主打卤肉粉，吃这个是有讲究的，厨房的墙上有贴正确吃饭的程序。简单来说就...', '/food/yangshuo702/126034.html');
INSERT INTO `t_restaurant` VALUES (83, '455597', '崇善米粉(阳朔店)', ' 0.0', ' 蟠桃路110号(近妇幼保健院)', ' 崇善米粉(阳朔店)在当地有着极高的人气，招牌是这家的叉烧米粉，里面有各种自选菜搭配，品种十分丰富...', '/food/yangshuo702/455597.html');
INSERT INTO `t_restaurant` VALUES (84, '5577504', '宝泉桂林米粉', ' 4.6', ' 城中路7号(乐乐来超市对面，农业银行旁)', ' ', '/food/yangshuo702/5577504.html');
INSERT INTO `t_restaurant` VALUES (85, '17506754', '谢三姐金奖啤酒鱼(西街总店)', ' 4.2', ' 西街与蟠桃路交叉口必胜客一楼', ' 谢三姐啤酒鱼是阳朔非常有名的啤酒鱼，在阳朔有很多分店，有不少名人也来光顾过。这里特色的菜品做得...', '/food/yangshuo702/17506754.html');
INSERT INTO `t_restaurant` VALUES (86, '12946866', '渔夫啤酒鱼(十五年老店)', ' 4.5', ' 城中路15号(县医院荷花塘旁)', ' 这家店的啤酒剑骨鱼评级较好，锅内有配有番茄，既提升了鱼的鲜味，还增添了番茄特有的酸甜口感，非常...', '/food/yangshuo702/12946866.html');
INSERT INTO `t_restaurant` VALUES (87, '11125344', '一品红虾', ' 2.0', ' 滨江西路1栋1层3号', ' ', '/food/liuzhou143/11125344.html');
INSERT INTO `t_restaurant` VALUES (88, '11171232', '唆螺馆', ' 5.0', ' 柳新街小南路66号(风凰饭店一楼)', ' ', '/food/liuzhou143/11171232.html');
INSERT INTO `t_restaurant` VALUES (89, '12468881', '知味亭(五星店)', ' 4.6', ' 五星商业街1号楼2层2号', ' ', '/food/liuzhou143/12468881.html');
INSERT INTO `t_restaurant` VALUES (90, '7743668', '望江寨柳州菜馆(西江店)', ' 5.0', ' 西江路7号(金泰美食城内)', ' ', '/food/liuzhou143/7743668.html');
INSERT INTO `t_restaurant` VALUES (91, '7748091', '柳州菜饮食文化博物馆', ' 4.1', ' 屏山大道339号(箭盘山公园旁)', ' ', '/food/liuzhou143/7748091.html');
INSERT INTO `t_restaurant` VALUES (92, '7750502', '金记柠檬鸭餐厅', ' 4.0', ' 飞鹅二路2号谷埠国际商贸城G区1层50号旺铺(天马派出所对面音悦家楼下)', ' ', '/food/liuzhou143/7750502.html');
INSERT INTO `t_restaurant` VALUES (93, '7746728', '肥螺庄', ' 4.4', ' 太平中街', ' ', '/food/liuzhou143/7746728.html');
INSERT INTO `t_restaurant` VALUES (94, '15451457', '小柒螺蛳粉(金鱼巷店)', ' 4.4', ' 解放南路金鱼巷68-13号', ' ', '/food/liuzhou143/15451457.html');
INSERT INTO `t_restaurant` VALUES (95, '7748253', '爱民螺蛳粉', ' 4.5', ' 柳新街66号蓝色港湾1栋1-7号', ' ', '/food/liuzhou143/7748253.html');
INSERT INTO `t_restaurant` VALUES (96, '7746800', '王味螺(飞鹅店)', ' 4.1', ' 飞鹅路55号-6栋-4-1单元(南天大厦南侧)', ' ', '/food/liuzhou143/7746800.html');
INSERT INTO `t_restaurant` VALUES (97, '7748106', '苗家乐风味食府', ' 4.2', ' 古宜镇月亮街6号', ' ', '/food/liuzhou143/7748106.html');
INSERT INTO `t_restaurant` VALUES (98, '12328351', '刘记豆花(雅儒店)', ' 4.0', ' 柳州市柳北区雅儒路300号(金大陆往北200米)', ' ', '/food/liuzhou143/12328351.html');
INSERT INTO `t_restaurant` VALUES (99, '7751308', '北站姚记豆花', ' 4.9', ' 跃进路东一巷柳州五中对面', ' ', '/food/liuzhou143/7751308.html');

SET FOREIGN_KEY_CHECKS = 1;