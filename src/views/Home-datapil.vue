<template>
  <div>
    <v-bottom-navigation :value="activeBtn" grow color="primary" fixed>
      <v-btn class="v-btn--round" to="/home">
        <span>首頁</span>
        <v-icon>mdi-home</v-icon>
      </v-btn>

      <v-btn class="v-btn--round" to="/business_trip">
        <span>新增</span>
        <v-icon>mdi-calendar-plus</v-icon>
      </v-btn>

      <v-btn class="v-btn--round">
        <span>查詢</span>
        <v-icon>mdi-clock</v-icon>
      </v-btn>
    </v-bottom-navigation>
    <v-main>
      <div class="content-header">
        <h5 class>新增/批核申請單</h5>
      </div>
      <div class="main-wrapper">
        <v-container>
          <v-btn
            id="dialoginsertbox_show"
            rounded
            large
            color="primary"
            dark
            class="btn-fixed-rb"
            @click="dialoginsertboxShow"
          >
            <v-icon>mdi-plus</v-icon>新增簽報
          </v-btn>
        </v-container>
        <!------------第一層燈箱------------>
        <v-dialog
          ref="dialoginsertbox"
          v-model="dialoginsertbox"
          fullscreen
          hide-overlay
          transition="dialog-bottom-transition"
          scrollable
        >
          <v-card tile class="radius-hd">
            <v-toolbar flat dark color="primary">
              <v-btn id="dialoginsertbox_hide" icon dark @click="dialoginsertboxHide">
                <v-icon>mdi-arrow-left</v-icon>
              </v-btn>
              <v-toolbar-title>新增請假申請單</v-toolbar-title>
            </v-toolbar>
            <v-card-text>
              <v-form v-model="valid">
                <h6>請輸入相關資訊</h6>

                <v-row>
                  <v-col cols="4">
                    <v-subheader class="text-subtitle-1 font-weight-bold px-0">假別</v-subheader>
                  </v-col>
                  <v-col cols="8">
                    <v-select
                      :items="holiday_types"
                      v-model="holiday_type"
                      label="holiday_type"
                      single-line
                      class="my-0 pt-2 no-border txt-primary"
                    ></v-select>
                  </v-col>
                </v-row>
                <v-divider class="my-0"></v-divider>
                <v-row align="center">
                  <v-col cols="4">
                    <v-subheader class="text-subtitle-1 font-weight-bold px-0">上班時間</v-subheader>
                  </v-col>
                  <v-col cols="8">
                    <p class="text-subtitle-1 px-0 mb-0">上班時間 {{worktime}}</p>
                  </v-col>
                  <v-col cols="4">
                    <v-subheader class="text-subtitle-1 font-weight-bold px-0">開始時間</v-subheader>
                  </v-col>
                  <v-col cols="8">
                    <v-btn
                      text
                      color="primary"
                      @click="dialog2 = true"
                      class="px-0 text-subtitle-1"
                    >{{starttime}}</v-btn>
                  </v-col>
                  <v-col cols="4">
                    <v-subheader class="text-subtitle-1 font-weight-bold px-0">請假時數</v-subheader>
                  </v-col>
                  <v-col cols="8">
                    <v-btn
                      :disabled="secDialog3Btn"
                      text
                      color="primary"
                      @click="dialog3 = true"
                      class="text-subtitle-1 px-0"
                    >{{holidaytimecount}}</v-btn>
                    <p class="txt-remark txt-pink text-caption mb-0 mt-8">*距離今日法定工作時間應請4小時</p>
                  </v-col>
                  <v-col cols="12">
                    <v-subheader class="text-subtitle-1 font-weight-bold px-0">請假時間</v-subheader>
                    <p
                      class="text-subtitle-1 px-0 mb-0 holiday_time_input"
                      :holiday-time-start="holidayTimeStart"
                      :holiday-time-end="holidayTimeEnd"
                    >{{holidaytime}}</p>
                  </v-col>
                </v-row>
                <v-divider class="my-0"></v-divider>
                <v-row>
                  <v-col cols="4">
                    <v-subheader class="text-subtitle-1 font-weight-bold px-0">代理人</v-subheader>
                  </v-col>
                  <v-col cols="8">
                    <v-select
                      :items="substitutes"
                      v-model="substitute"
                      label="substitute"
                      single-line
                      class="my-0 pt-2 no-border txt-primary"
                    ></v-select>
                  </v-col>
                </v-row>
                <v-divider class="my-0"></v-divider>
                <v-row>
                  <v-col cols="4">
                    <v-subheader class="text-subtitle-1 font-weight-bold px-0">請假事由</v-subheader>
                  </v-col>
                  <v-col cols="8">
                    <v-select
                      :items="holiday_reasons"
                      v-model="holiday_reason"
                      label="holiday_reason"
                      single-line
                      class="my-0 pt-2 no-border txt-primary"
                    ></v-select>
                  </v-col>
                </v-row>
                <v-row>
                  <v-col cols="12">
                    <v-textarea
                      maxlength="30"
                      auto-grow
                      outlined
                      counter
                      name="remark"
                      rows="2"
                      placeholder="補充說明可輸入30字"
                      class="no-counter rounded-0"
                    ></v-textarea>
                  </v-col>
                </v-row>
              </v-form>

              <v-row align="center">
                <v-col class="text-right" cols="12">
                  <div class="my-2">
                    <v-btn
                      text
                      color="primary"
                      class="font-weight-bold"
                      @click="dialoginsertboxSubmit"
                    >確定送出</v-btn>
                  </div>
                </v-col>
              </v-row>
            </v-card-text>

            <div style="flex: 1 1 auto;"></div>
          </v-card>
        </v-dialog>
        <!------------第二層開始時間------------>
        <v-dialog ref="dialog" v-model="dialog2" :return-value.sync="date" persistent width="360px">
          <div class="picker-header v-picker__title primary">
            您的上班時間
            <span>{{worktime}}</span>
            <v-row class="v-date-picker-title-total">
              <v-col
                cols="7"
                class="v-date-picker-title__date"
              >{{date.replace('-', '/').replace('-', '/')}}</v-col>
              <v-col cols="5" class="v-date-picker-title__clock">{{dateHours}}:{{dateMinutes}}</v-col>
            </v-row>
          </div>
          <v-date-picker
            class="v-date-picker-inner"
            v-model="date"
            full-width
            :min="holidayRange.min"
            :max="holidayRange.max"
            @contextmenu:year="contextMenu"
            @dblclick:date="dblClick"
            @mouseenter:month="mouseEnter"
            @mouseleave:month="mouseLeave"
          ></v-date-picker>

          <v-spacer></v-spacer>
          <smooth-picker
            id="smooth_picker04"
            class="smooth_picker04"
            ref="smoothPicker04"
            :data="data03"
            :change="change"
            :style="{'pointer-events':'auto','width':'100%'}"
          />
          <v-spacer></v-spacer>
          <div class="picker-alert-text">*開始時間不得早於上班時間</div>
          <v-col class="text-right data-dialog-footer pt-5 pb-15" cols="12">
            <v-btn text color="primary" @click="dialog2Cancel(date)">取消</v-btn>
            <v-btn text color="primary" @click="dialog2Save(date)">確定</v-btn>
          </v-col>
        </v-dialog>
        <!------------第三層結束時間------------>
        <v-dialog
          ref="dialog3"
          v-model="dialog3"
          :return-value.sync="leaveDate"
          persistent
          width="360px"
        >
          <div class="picker-header v-picker__title primary">
            您的請假開始時間
            <span>{{this.dateHours}}:{{this.dateMinutes}}</span>
            <v-row class="v-date-picker-title-total">
              <v-col
                cols="7"
                class="v-date-picker-title__date"
              >{{leaveDate.replace('-', '/').replace('-', '/')}}</v-col>
              <v-col
                cols="5"
                class="v-date-picker-title__clock"
              >{{leaveDateHours}}:{{leaveDateMinutes}}</v-col>
            </v-row>
          </div>
          <v-date-picker
            class="v-date-picker-inner"
            v-model="leaveDate"
            full-width
            :min="holidayRangeEnd.min"
            :max="holidayRangeEnd.max"
            @contextmenu:year="contextMenu"
            @dblclick:date="dblClick"
            @mouseenter:month="mouseEnter"
            @mouseleave:month="mouseLeave"
          ></v-date-picker>

          <v-spacer></v-spacer>
          <smooth-picker
            id="smooth_picker05"
            class="smooth_picker05"
            ref="smoothPicker05"
            :data="data05"
            :change="changeEnd"
            :style="{'pointer-events':'auto','width':'100%'}"
          />
          <v-spacer></v-spacer>
          <div class="picker-alert-text">*結束時間不得早於開始時間</div>
          <v-col class="text-right data-dialog-footer pt-5 pb-15" cols="12">
            <v-btn text color="primary" @click="dialog3 = false">取消</v-btn>
            <v-btn text color="primary" @click="dialog3Save(leaveDate)">確定</v-btn>
          </v-col>
        </v-dialog>
      </div>
    </v-main>
  </div>
</template>
<script>
//預設載入
export default {
  data() {
    return {
      remnant: 600, //倒計數
      ///////////////////
      activeBtn: 1,
      dialoginsertbox: false, //第一層燈箱
      holiday_type: "休假-本年度休假",
      holiday_types: [
        {
          text: "休假-本年度休假"
        },
        {
          text: "休假-私事待辦"
        },
        {
          text: "休假-生理假"
        },
        {
          text: "休假-病假"
        }
      ],
      worktime: "", //上班時間
      worktimeTimeStamp: "",
      starttime: "尚未設定", //請假起日
      endtime: "", //請假迄日
      holidayRange: {
        //請假範圍(起)
        min: "",
        max: ""
      },
      holidayRangeEnd: {
        //請假範圍(迄)
        min: "",
        max: ""
      },
      substitute: "陳偉應",
      substitutes: [
        {
          text: "陳偉應"
        },
        {
          text: "金碩珍"
        },
        {
          text: "王小明"
        },
        {
          text: "林小美"
        }
      ],
      holiday_reason: "私事待辦",
      holiday_reasons: [
        {
          text: "私事待辦"
        },
        {
          text: "生理假"
        },
        {
          text: "病假"
        },
        {
          text: "特休"
        }
      ],
      //remarkrules: [v => v.length <= 30 || "最多輸入30個字"],
      valid: [],
      /////////////////////////
      secDialog3Btn: true, //起始鎖定結束時間
      dialog2: false, //第二層燈箱
      date: new Date().toISOString().substr(0, 10),
      dateHours: "08",
      dateMinutes: "30",
      dialog3: false, //第三層燈箱
      leaveDate: new Date().toISOString().substr(0, 10),
      leaveDateHours: "12",
      leaveDateMinutes: "30",
      ///////////////////
      menu: false,
      modal: false,
      menu2: false,
      done: [false, false, false],
      mouseMonth: null,
      data03: [
        {
          currentIndex: 8,
          flex: 3,
          list: [
            "00",
            "01",
            "02",
            "03",
            "04",
            "05",
            "06",
            "07",
            "08",
            "09",
            "10",
            "11",
            "12",
            "13",
            "14",
            "15",
            "16",
            "17",
            "18",
            "19",
            "20",
            "21",
            "22",
            "23"
          ],
          onClick: this.clickOnPlan,
          textAlign: "center",
          className: "row-group"
        },
        {
          divider: true,
          flex: 1,
          text: ":",
          textAlign: "center",
          className: "divider"
        },
        {
          currentIndex: 30,
          flex: 3,
          list: [
            "00",
            "01",
            "02",
            "03",
            "04",
            "05",
            "06",
            "07",
            "08",
            "09",
            "10",
            "11",
            "12",
            "13",
            "14",
            "15",
            "16",
            "17",
            "18",
            "19",
            "20",
            "21",
            "22",
            "23",
            "24",
            "25",
            "26",
            "27",
            "28",
            "29",
            "30",
            "31",
            "32",
            "33",
            "34",
            "35",
            "36",
            "37",
            "38",
            "39",
            "40",
            "41",
            "42",
            "43",
            "44",
            "45",
            "46",
            "47",
            "48",
            "49",
            "50",
            "51",
            "52",
            "53",
            "54",
            "55",
            "56",
            "57",
            "58",
            "59"
          ],

          onClick: this.clickOnProduct,
          textAlign: "center",
          className: "item-group"
        }
      ],
      data05: [
        {
          currentIndex: 12,
          flex: 3,
          list: [
            "00",
            "01",
            "02",
            "03",
            "04",
            "05",
            "06",
            "07",
            "08",
            "09",
            "10",
            "11",
            "12",
            "13",
            "14",
            "15",
            "16",
            "17",
            "18",
            "19",
            "20",
            "21",
            "22",
            "23"
          ],
          onClick: this.clickOnPlan,
          textAlign: "center",
          className: "row-group"
        },
        {
          divider: true,
          flex: 1,
          text: ":",
          textAlign: "center",
          className: "divider"
        },
        {
          currentIndex: 30,
          flex: 3,
          list: [
            "00",
            "01",
            "02",
            "03",
            "04",
            "05",
            "06",
            "07",
            "08",
            "09",
            "10",
            "11",
            "12",
            "13",
            "14",
            "15",
            "16",
            "17",
            "18",
            "19",
            "20",
            "21",
            "22",
            "23",
            "24",
            "25",
            "26",
            "27",
            "28",
            "29",
            "30",
            "31",
            "32",
            "33",
            "34",
            "35",
            "36",
            "37",
            "38",
            "39",
            "40",
            "41",
            "42",
            "43",
            "44",
            "45",
            "46",
            "47",
            "48",
            "49",
            "50",
            "51",
            "52",
            "53",
            "54",
            "55",
            "56",
            "57",
            "58",
            "59"
          ],

          onClick: this.clickOnProduct,
          textAlign: "center",
          className: "item-group"
        }
      ]
    };
  },
  components: {
    //
  },
  computed: {
    holidaytime: function() {
      if (this.endtime.length > 0) {
        return this.starttime + " ~ " + this.endtime;
      }
    },
    holidayTimeStart: function() {
      if (this.endtime.length > 0) {
        //換算時間戳記
        return (
          Date.parse(this.date) +
          Number(this.dateHours) * 60 * 60 * 1000 +
          Number(this.dateMinutes) * 60 * 1000 -
          8 * 60 * 60 * 1000
        );
      }
    },
    holidayTimeEnd: function() {
      if (this.endtime.length > 0) {
        //換算時間戳記
        return (
          Date.parse(this.leaveDate) +
          Number(this.leaveDateHours) * 60 * 60 * 1000 +
          Number(this.leaveDateMinutes) * 60 * 1000 -
          8 * 60 * 60 * 1000
        );
      }
    },
    holidaytimecount: function() {
      if (this.starttime.length > 0 && this.endtime.length > 0) {
        //起迄相減取時間戳
        var holidaySpace = this.holidayTimeEnd - this.holidayTimeStart;
        //取天的整數
        var holidaySpaceDay = parseInt(holidaySpace / (60 * 60 * 1000 * 24));
        //取餘數換算小時
        var holidaySpaceHour =
          (holidaySpace % (60 * 60 * 1000 * 24)) / (60 * 60 * 1000);
        //取餘數換算分鐘
        var holidaySpaceMin = (holidaySpace % (60 * 60 * 1000)) / (60 * 1000);

        //如果有餘數就取時/分
        if (this.isToInteger(holidaySpace / (60 * 60 * 1000 * 24)) === true) {
          return holidaySpaceDay + "天";
        } else if (this.isToInteger(holidaySpaceHour) === true) {
          return holidaySpaceDay + "天" + holidaySpaceHour + "小時";
        } else {
          return (
            holidaySpaceDay +
            "天" +
            parseInt(holidaySpaceHour) +
            "小時" +
            holidaySpaceMin +
            "分鐘"
          );
        }
      } else {
        return "尚未設定";
      }
    }
  },
  methods: {
    //判斷是否為整數
    isToInteger(obj) {
      return obj % 1 === 0;
    },
    clickOnPlan(gIndex, iIndex) {
      //console.info("group:", gIndex, " index:", iIndex);
    },
    clickOnProduct(gIndex, iIndex) {
      //console.info("group:", gIndex, " index:", iIndex);
    },
    //將值存回去
    change(gIndex, iIndex) {
      //console.info("group:", gIndex, " index:", iIndex);
      if (gIndex === 0) {
        if (iIndex.toString().length === 1) {
          this.dateHours = "0" + iIndex;
        } else {
          this.dateHours = iIndex;
        }
      } else if (gIndex === 2) {
        if (iIndex.toString().length === 1) {
          this.dateMinutes = "0" + iIndex;
        } else {
          this.dateMinutes = iIndex;
        }
      }
    },
    //將值存回去
    changeEnd(gIndex, iIndex) {
      console.info("group:", gIndex, " index:", iIndex);
      if (gIndex === 0) {
        if (iIndex.toString().length === 1) {
          this.leaveDateHours = "0" + iIndex;
        } else {
          this.leaveDateHours = iIndex;
        }
      } else if (gIndex === 2) {
        if (iIndex.toString().length === 1) {
          this.leaveDateMinutes = "0" + iIndex;
        } else {
          this.leaveDateMinutes = iIndex;
        }
      }
    },
    //datepick
    contextMenu(year, event) {
      this.$set(this.done, 2, true);
      event.preventDefault();
      alert(`You have activated context menu for year ${year}`);
    },
    dblClick(date) {
      this.$set(this.done, 0, true);
      alert(`You have just double clicked the following date: ${date}`);
    },
    mouseEnter(month) {
      this.$set(this.done, 1, true);
      this.mouseMonth = month;
    },
    mouseLeave() {
      this.mouseMonth = null;
    },
    //dialoginsertbox
    dialoginsertboxShow() {
      this.dialoginsertbox = Boolean(true);
    },
    dialoginsertboxHide() {
      this.dialoginsertbox = Boolean(false);
    },
    //update datepik total
    dialog2Save(date) {
      //計算開始時間
      var startTimeFn =
        this.date.replace("-", "/").replace("-", "/") +
        " " +
        this.dateHours +
        ":" +
        this.dateMinutes;
      //開始時間(時間戳)
      var startTimeStampFn = new Date(startTimeFn.toString());

      //判斷如果是當天,是否比上班時間早?
      if (startTimeStampFn < this.worktimeTimeStamp) {
        //console.log(startTimeStampFn, this.worktimeTimeStamp);
        alert("請假開始時間不得早於上班時間");
      } else {
        this.$refs.dialog.save(date);
        this.starttime = startTimeFn;
        //限定請假範圍(迄)的開始時間
        this.holidayRangeEnd.min = this.date;
        this.holidayRangeEnd.max = new Date(
          Date.parse(this.date) + 60 * 60 * 1000 * 24 * 365
        )
          .toISOString()
          .substr(0, 10);
        if (this.secDialog3Btn === true) {
          //更新結束時間的預設日期
          this.leaveDate = this.date;
          //解鎖結束時間燈箱按鈕
          this.secDialog3Btn = false;
        }
      }
    },
    //取消第二層燈箱
    dialog2Cancel(date) {
      /*
      //計算開始時間
      var startTimeFn =
        this.date.replace("-", "/").replace("-", "/") +
        " " +
        this.dateHours +
        ":" +
        this.dateMinutes;
      //開始時間(時間戳)
      var startTimeStampFn = new Date(startTimeFn.toString());
      //判斷如果是當天,是否比上班時間早?
      if (startTimeStampFn < this.worktimeTimeStamp) {
        //this.dateHours = '';
        //this.dateMinutes = '';
      }
      */
      //關閉燈箱
      this.dialog2 = false;
    },
    dialog3Save(leaveDate) {
      //計算開始時間
      var startTimeFn =
        this.date.replace("-", "/").replace("-", "/") +
        " " +
        this.dateHours +
        ":" +
        this.dateMinutes;
      //開始時間(時間戳)
      var startTimeStampFn = new Date(startTimeFn.toString());

      //計算結束時間
      var leaveDateFn =
        this.leaveDate.replace("-", "/").replace("-", "/") +
        " " +
        this.leaveDateHours +
        ":" +
        this.leaveDateMinutes;
      //結束時間(時間戳)
      var endTimeStampFn = new Date(leaveDateFn.toString());

      //如果結束時間比開始時間還要早
      if (endTimeStampFn < startTimeStampFn) {
        alert("請假結束時間不得早於開始時間");
      } else {
        this.$refs.dialog3.save(leaveDate);
        this.endtime = leaveDateFn;
      }
    },
    //時間轉時和秒
    toHHMM(time) {
      var hours = time.getHours();
      var minutes = time.getMinutes();
      if (hours < 10) {
        hours = "0" + hours;
      }
      if (minutes < 10) {
        minutes = "0" + minutes;
      }
      return hours + ":" + minutes;
    },
    //日期字串轉時間戳 '2015-03-05 17:59:00.0';
    dateStrChangeTimeTamp(dateStr) {
      var timesTamp01 = dateStr.substring(0, 19);
      var timesTamp02 = timesTamp01.replace(/-/g, "/");
      var timesTamp03 = new Date(timesTamp02).getTime();
      console.log(timesTamp03);
    },
    //送出表單
    dialoginsertboxSubmit() {
      //判斷表單內的資料是否有誤
      //計算開始時間
      var startTimeFn =
        this.date.replace("-", "/").replace("-", "/") +
        " " +
        this.dateHours +
        ":" +
        this.dateMinutes;
      //開始時間(時間戳)
      var startTimeStampFn = new Date(startTimeFn.toString());

      //計算結束時間
      var leaveDateFn =
        this.leaveDate.replace("-", "/").replace("-", "/") +
        " " +
        this.leaveDateHours +
        ":" +
        this.leaveDateMinutes;
      //結束時間(時間戳)
      var endTimeStampFn = new Date(leaveDateFn.toString());

      //結束時間是否比開始時間早?
      if (this.secDialog3Btn === true) {
        alert("尚未填寫完請假申請單");
      } else if (endTimeStampFn < startTimeStampFn) {
        alert("請假結束時間不得早於開始時間");
      } else {
        //補上送出表單後要傳的資料
        this.dialoginsertbox = false;
      }
    },
    //倒計數
    descInput() {
      var txtVal = this.desc.length;
      this.remnant = 600 - txtVal;
    }
  },
  watch: {
    //使燈箱每次重開都會重啟smoothPicker
    dialog3() {
      this.$nextTick(() => this.$refs.smoothPicker05.getGroupsRectList());
    },
    dialog2() {
      this.$nextTick(() => this.$refs.smoothPicker04.getGroupsRectList());
    }
  },
  //---------------生命週期---------------
  beforeCreate() {
    //console.log("App beforeCreate.");
  },
  created() {
    //console.log("App created.");
    //預設小時和分的值
    var dateHoursNum = new Date().getHours();
    //console.log(dateHoursNum.toString().length);
    if (dateHoursNum.toString().length === 1) {
      this.dateHours = "0" + dateHoursNum;
    } else {
      this.dateHours = dateHoursNum;
    }
    var dateMinutesNum = new Date().getMinutes();
    //console.log(dateMinutesNum.toString().length);
    if (dateMinutesNum.toString().length === 1) {
      this.dateMinutes = "0" + dateMinutesNum;
    } else {
      this.dateMinutes = dateMinutesNum;
    }
    //API 取得上班時間後
    var wakeUPcard = "2020/09/22 08:15";
    this.worktimeTimeStamp = new Date(wakeUPcard).getTime(); //設成現在(時間戳)
    //將上班時間加入data
    this.worktime = this.toHHMM(new Date(this.worktimeTimeStamp));

    //設置請假範圍(一年後)
    var worktimeTimeStamp01 = new Date(this.worktimeTimeStamp);
    var worktimeTimeStamp02 = new Date(
      +this.worktimeTimeStamp + 60 * 60 * 1000 * 24 * 365
    );
    this.holidayRange.min = worktimeTimeStamp01.toISOString().substr(0, 10); // e.g. 2017-11-21
    this.holidayRange.max = worktimeTimeStamp02.toISOString().substr(0, 10);
  },
  beforeMount() {
    //console.log("App beforeMount.");
  },
  mounted() {
    //console.log("App mounted.");
    ////////////////////////////////
  },
  beforeUpdate() {
    //console.log("App beforeUpdate.");
    $(".smooth_picker05,.smooth_picker04").removeClass("smooth-picker-act");
  },
  updated() {
    //console.log("App updated.");
    $(".smooth_picker05,.smooth_picker04").addClass("smooth-picker-act");
  },
  beforeDestroy() {
    //console.log("App beforeDestroy.");
  },
  destroyed() {
    //console.log("App destroyed.");
  },
  beforeRouteEnter(to, from, next) {
    //console.log("App beforeRouterEnter.");
    next();
  },
  beforeRouteUpdate(to, from, next) {
    //console.log("App beforeRouterUpdate.");
    next();
  },
  beforeRouteLeave(to, from, next) {
    //console.log("App beforeRouterLeave.");
    next();
  }
};
</script>
<style>
.v-date-picker-inner > .v-picker__title {
  display: none;
}
#app .smooth-picker .smooth-item {
  font-size: 2em;
  height: 1.5em;
  line-height: 1.5;
  font-weight: 700;
  color: #1976d2;
}
#app .smooth-picker .smooth-handle-layer .smooth-top,
#app .smooth-picker .smooth-handle-layer .smooth-bottom {
  background: rgb(255 255 255 / 0.7);
  border-width: 0;
}
#app .smooth-picker .smooth-list {
  top: 4.5em;
  height: 1.25em;
}
#app .smooth-picker .smooth-handle-layer .smooth-middle {
  height: 5em;
}

#app .smooth-picker {
  height: 12em;
}

.data-dialog-footer {
  background: #fff;
}

.picker-alert-text {
  padding-top: 20px;
  background: #fff;
  text-align: center;
  color: #e91e63;
}
/*
.smooth_picker04,
.smooth_picker05 {
  border-top: 1px solid #ccc;
  border-bottom: 1px solid #ccc;
}
*/

.v-date-picker-title-total > div {
  font-size: 30px;
}
</style>