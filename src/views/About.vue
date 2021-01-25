<template>
  <div class="about container">
    <h1 class="title">防止冒泡</h1>
    <div class="dropdown">
      <button
        class="btn btn-secondary dropdown-toggle"
        type="button"
        id="dropdownMenuButton"
        data-toggle="dropdown"
        aria-haspopup="true"
        aria-expanded="false"
      >Dropdown button</button>
      <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
        <a class="dropdown-item" href="#">Action</a>
        <a class="dropdown-item" href="#">Another action</a>
        <a class="dropdown-item" href="#">Something else here</a>
      </div>
    </div>
    <div class="level-01">
      第一層
      <div class="level-02">
        第二層
        <div class="level-03">
          第三層
          <div class="level-04">第四層</div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  mounted() {
    var titleText = $(".title").text();
    //alert(titleText);
    $(".level-04").click(function(e) {
      console.log("第四層", e.eventPhase);
      return false;
    });
    $(".level-03").click(function(e) {
      console.log("第三層", e.eventPhase);
      return false;
      //e.stopPropagation();
    });
    $(".level-02").click(function(e) {
      console.log("第二層", e.eventPhase);
      return false;
    });
    $(".level-01").click(function(e) {
      console.log("第一層", e.eventPhase);
      return false;
    });
    /*
    eventPhase 為『事件階段』:
    印出來的e.eventPhase，代表此事件為哪一個階段。 
    捕獲階段 (Capture Phase) - 1
    目標階段 (Target Phase) - 2
    冒泡階段 (Bubbling Phase) - 3
    //////////////////////
    阻止冒泡事件的方法 :
    1. 停止事件傳遞 (stopPropagation) 
    2. 取消預設行為 (preventDefault)
    3. return false 會同時執行 stopPropagation 和 preventDefault
    */
  }
};
</script>
<style scoped lang="scss">
.about {
  margin: 15rem auto;
}
</style>