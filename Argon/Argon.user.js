// ==UserScript==
// @name         Oh-my-blackboard Argon Theme
// @namespace    bb.cuhk.edu.cn
// @version      1.01
// @description  Argon Theme for Blackboard
// @author       enderturtleorz@gmail.com
// @grant        GM_addStyle
// @match        *://bb.cuhk.edu.cn/webapps/*
// @run-at       document-start
// ==/UserScript==

GM_addStyle(`
.materialize-red
  {
    background-color: #e51c23 !important;
  }

  .materialize-red-text
  {
    color: #e51c23 !important;
  }

  .materialize-red.lighten-5
  {
    background-color: #fdeaeb !important;
  }

  .materialize-red-text.text-lighten-5
  {
    color: #fdeaeb !important;
  }

  .materialize-red.lighten-4
  {
    background-color: #f8c1c3 !important;
  }

  .materialize-red-text.text-lighten-4
  {
    color: #f8c1c3 !important;
  }

  .materialize-red.lighten-3
  {
    background-color: #f3989b !important;
  }

  .materialize-red-text.text-lighten-3
  {
    color: #f3989b !important;
  }

  .materialize-red.lighten-2
  {
    background-color: #ee6e73 !important;
  }

  .materialize-red-text.text-lighten-2
  {
    color: #ee6e73 !important;
  }

  .materialize-red.lighten-1
  {
    background-color: #ea454b !important;
  }

  .materialize-red-text.text-lighten-1
  {
    color: #ea454b !important;
  }

  .materialize-red.darken-1
  {
    background-color: #d0181e !important;
  }

  .materialize-red-text.text-darken-1
  {
    color: #d0181e !important;
  }

  .materialize-red.darken-2
  {
    background-color: #b9151b !important;
  }

  .materialize-red-text.text-darken-2
  {
    color: #b9151b !important;
  }

  .materialize-red.darken-3
  {
    background-color: #a21318 !important;
  }

  .materialize-red-text.text-darken-3
  {
    color: #a21318 !important;
  }

  .materialize-red.darken-4
  {
    background-color: #8b1014 !important;
  }

  .materialize-red-text.text-darken-4
  {
    color: #8b1014 !important;
  }

  .red
  {
    background-color: #F44336 !important;
  }

  .red-text
  {
    color: #F44336 !important;
  }

  .red.lighten-5
  {
    background-color: #FFEBEE !important;
  }

  .red-text.text-lighten-5
  {
    color: #FFEBEE !important;
  }

  .red.lighten-4
  {
    background-color: #FFCDD2 !important;
  }

  .red-text.text-lighten-4
  {
    color: #FFCDD2 !important;
  }

  .red.lighten-3
  {
    background-color: #EF9A9A !important;
  }

  .red-text.text-lighten-3
  {
    color: #EF9A9A !important;
  }

  .red.lighten-2
  {
    background-color: #E57373 !important;
  }

  .red-text.text-lighten-2
  {
    color: #E57373 !important;
  }

  .red.lighten-1
  {
    background-color: #EF5350 !important;
  }

  .red-text.text-lighten-1
  {
    color: #EF5350 !important;
  }

  .red.darken-1
  {
    background-color: #E53935 !important;
  }

  .red-text.text-darken-1
  {
    color: #E53935 !important;
  }

  .red.darken-2
  {
    background-color: #D32F2F !important;
  }

  .red-text.text-darken-2
  {
    color: #D32F2F !important;
  }

  .red.darken-3
  {
    background-color: #C62828 !important;
  }

  .red-text.text-darken-3
  {
    color: #C62828 !important;
  }

  .red.darken-4
  {
    background-color: #B71C1C !important;
  }

  .red-text.text-darken-4
  {
    color: #B71C1C !important;
  }

  .red.accent-1
  {
    background-color: #FF8A80 !important;
  }

  .red-text.text-accent-1
  {
    color: #FF8A80 !important;
  }

  .red.accent-2
  {
    background-color: #FF5252 !important;
  }

  .red-text.text-accent-2
  {
    color: #FF5252 !important;
  }

  .red.accent-3
  {
    background-color: #FF1744 !important;
  }

  .red-text.text-accent-3
  {
    color: #FF1744 !important;
  }

  .red.accent-4
  {
    background-color: #D50000 !important;
  }

  .red-text.text-accent-4
  {
    color: #D50000 !important;
  }

  .pink
  {
    background-color: #e91e63 !important;
  }

  .pink-text
  {
    color: #e91e63 !important;
  }

  .pink.lighten-5
  {
    background-color: #fce4ec !important;
  }

  .pink-text.text-lighten-5
  {
    color: #fce4ec !important;
  }

  .pink.lighten-4
  {
    background-color: #f8bbd0 !important;
  }

  .pink-text.text-lighten-4
  {
    color: #f8bbd0 !important;
  }

  .pink.lighten-3
  {
    background-color: #f48fb1 !important;
  }

  .pink-text.text-lighten-3
  {
    color: #f48fb1 !important;
  }

  .pink.lighten-2
  {
    background-color: #f06292 !important;
  }

  .pink-text.text-lighten-2
  {
    color: #f06292 !important;
  }

  .pink.lighten-1
  {
    background-color: #ec407a !important;
  }

  .pink-text.text-lighten-1
  {
    color: #ec407a !important;
  }

  .pink.darken-1
  {
    background-color: #d81b60 !important;
  }

  .pink-text.text-darken-1
  {
    color: #d81b60 !important;
  }

  .pink.darken-2
  {
    background-color: #c2185b !important;
  }

  .pink-text.text-darken-2
  {
    color: #c2185b !important;
  }

  .pink.darken-3
  {
    background-color: #ad1457 !important;
  }

  .pink-text.text-darken-3
  {
    color: #ad1457 !important;
  }

  .pink.darken-4
  {
    background-color: #880e4f !important;
  }

  .pink-text.text-darken-4
  {
    color: #880e4f !important;
  }

  .pink.accent-1
  {
    background-color: #ff80ab !important;
  }

  .pink-text.text-accent-1
  {
    color: #ff80ab !important;
  }

  .pink.accent-2
  {
    background-color: #ff4081 !important;
  }

  .pink-text.text-accent-2
  {
    color: #ff4081 !important;
  }

  .pink.accent-3
  {
    background-color: #f50057 !important;
  }

  .pink-text.text-accent-3
  {
    color: #f50057 !important;
  }

  .pink.accent-4
  {
    background-color: #c51162 !important;
  }

  .pink-text.text-accent-4
  {
    color: #c51162 !important;
  }

  .purple
  {
    background-color: #9c27b0 !important;
  }

  .purple-text
  {
    color: #9c27b0 !important;
  }

  .purple.lighten-5
  {
    background-color: #f3e5f5 !important;
  }

  .purple-text.text-lighten-5
  {
    color: #f3e5f5 !important;
  }

  .purple.lighten-4
  {
    background-color: #e1bee7 !important;
  }

  .purple-text.text-lighten-4
  {
    color: #e1bee7 !important;
  }

  .purple.lighten-3
  {
    background-color: #ce93d8 !important;
  }

  .purple-text.text-lighten-3
  {
    color: #ce93d8 !important;
  }

  .purple.lighten-2
  {
    background-color: #ba68c8 !important;
  }

  .purple-text.text-lighten-2
  {
    color: #ba68c8 !important;
  }

  .purple.lighten-1
  {
    background-color: #ab47bc !important;
  }

  .purple-text.text-lighten-1
  {
    color: #ab47bc !important;
  }

  .purple.darken-1
  {
    background-color: #8e24aa !important;
  }

  .purple-text.text-darken-1
  {
    color: #8e24aa !important;
  }

  .purple.darken-2
  {
    background-color: #7b1fa2 !important;
  }

  .purple-text.text-darken-2
  {
    color: #7b1fa2 !important;
  }

  .purple.darken-3
  {
    background-color: #6a1b9a !important;
  }

  .purple-text.text-darken-3
  {
    color: #6a1b9a !important;
  }

  .purple.darken-4
  {
    background-color: #4a148c !important;
  }

  .purple-text.text-darken-4
  {
    color: #4a148c !important;
  }

  .purple.accent-1
  {
    background-color: #ea80fc !important;
  }

  .purple-text.text-accent-1
  {
    color: #ea80fc !important;
  }

  .purple.accent-2
  {
    background-color: #e040fb !important;
  }

  .purple-text.text-accent-2
  {
    color: #e040fb !important;
  }

  .purple.accent-3
  {
    background-color: #d500f9 !important;
  }

  .purple-text.text-accent-3
  {
    color: #d500f9 !important;
  }

  .purple.accent-4
  {
    background-color: #aa00ff !important;
  }

  .purple-text.text-accent-4
  {
    color: #aa00ff !important;
  }

  .deep-purple
  {
    background-color: #673ab7 !important;
  }

  .deep-purple-text
  {
    color: #673ab7 !important;
  }

  .deep-purple.lighten-5
  {
    background-color: #ede7f6 !important;
  }

  .deep-purple-text.text-lighten-5
  {
    color: #ede7f6 !important;
  }

  .deep-purple.lighten-4
  {
    background-color: #d1c4e9 !important;
  }

  .deep-purple-text.text-lighten-4
  {
    color: #d1c4e9 !important;
  }

  .deep-purple.lighten-3
  {
    background-color: #b39ddb !important;
  }

  .deep-purple-text.text-lighten-3
  {
    color: #b39ddb !important;
  }

  .deep-purple.lighten-2
  {
    background-color: #9575cd !important;
  }

  .deep-purple-text.text-lighten-2
  {
    color: #9575cd !important;
  }

  .deep-purple.lighten-1
  {
    background-color: #7e57c2 !important;
  }

  .deep-purple-text.text-lighten-1
  {
    color: #7e57c2 !important;
  }

  .deep-purple.darken-1
  {
    background-color: #5e35b1 !important;
  }

  .deep-purple-text.text-darken-1
  {
    color: #5e35b1 !important;
  }

  .deep-purple.darken-2
  {
    background-color: #512da8 !important;
  }

  .deep-purple-text.text-darken-2
  {
    color: #512da8 !important;
  }

  .deep-purple.darken-3
  {
    background-color: #4527a0 !important;
  }

  .deep-purple-text.text-darken-3
  {
    color: #4527a0 !important;
  }

  .deep-purple.darken-4
  {
    background-color: #311b92 !important;
  }

  .deep-purple-text.text-darken-4
  {
    color: #311b92 !important;
  }

  .deep-purple.accent-1
  {
    background-color: #b388ff !important;
  }

  .deep-purple-text.text-accent-1
  {
    color: #b388ff !important;
  }

  .deep-purple.accent-2
  {
    background-color: #7c4dff !important;
  }

  .deep-purple-text.text-accent-2
  {
    color: #7c4dff !important;
  }

  .deep-purple.accent-3
  {
    background-color: #651fff !important;
  }

  .deep-purple-text.text-accent-3
  {
    color: #651fff !important;
  }

  .deep-purple.accent-4
  {
    background-color: #6200ea !important;
  }

  .deep-purple-text.text-accent-4
  {
    color: #6200ea !important;
  }

  .indigo
  {
    background-color: #3f51b5 !important;
  }

  .indigo-text
  {
    color: #3f51b5 !important;
  }

  .indigo.lighten-5
  {
    background-color: #e8eaf6 !important;
  }

  .indigo-text.text-lighten-5
  {
    color: #e8eaf6 !important;
  }

  .indigo.lighten-4
  {
    background-color: #c5cae9 !important;
  }

  .indigo-text.text-lighten-4
  {
    color: #c5cae9 !important;
  }

  .indigo.lighten-3
  {
    background-color: #9fa8da !important;
  }

  .indigo-text.text-lighten-3
  {
    color: #9fa8da !important;
  }

  .indigo.lighten-2
  {
    background-color: #7986cb !important;
  }

  .indigo-text.text-lighten-2
  {
    color: #7986cb !important;
  }

  .indigo.lighten-1
  {
    background-color: #5c6bc0 !important;
  }

  .indigo-text.text-lighten-1
  {
    color: #5c6bc0 !important;
  }

  .indigo.darken-1
  {
    background-color: #3949ab !important;
  }

  .indigo-text.text-darken-1
  {
    color: #3949ab !important;
  }

  .indigo.darken-2
  {
    background-color: #303f9f !important;
  }

  .indigo-text.text-darken-2
  {
    color: #303f9f !important;
  }

  .indigo.darken-3
  {
    background-color: #283593 !important;
  }

  .indigo-text.text-darken-3
  {
    color: #283593 !important;
  }

  .indigo.darken-4
  {
    background-color: #1a237e !important;
  }

  .indigo-text.text-darken-4
  {
    color: #1a237e !important;
  }

  .indigo.accent-1
  {
    background-color: #8c9eff !important;
  }

  .indigo-text.text-accent-1
  {
    color: #8c9eff !important;
  }

  .indigo.accent-2
  {
    background-color: #536dfe !important;
  }

  .indigo-text.text-accent-2
  {
    color: #536dfe !important;
  }

  .indigo.accent-3
  {
    background-color: #3d5afe !important;
  }

  .indigo-text.text-accent-3
  {
    color: #3d5afe !important;
  }

  .indigo.accent-4
  {
    background-color: #304ffe !important;
  }

  .indigo-text.text-accent-4
  {
    color: #304ffe !important;
  }

  .blue
  {
    background-color: #2196F3 !important;
  }

  .blue-text
  {
    color: #2196F3 !important;
  }

  .blue.lighten-5
  {
    background-color: #E3F2FD !important;
  }

  .blue-text.text-lighten-5
  {
    color: #E3F2FD !important;
  }

  .blue.lighten-4
  {
    background-color: #BBDEFB !important;
  }

  .blue-text.text-lighten-4
  {
    color: #BBDEFB !important;
  }

  .blue.lighten-3
  {
    background-color: #90CAF9 !important;
  }

  .blue-text.text-lighten-3
  {
    color: #90CAF9 !important;
  }

  .blue.lighten-2
  {
    background-color: #64B5F6 !important;
  }

  .blue-text.text-lighten-2
  {
    color: #64B5F6 !important;
  }

  .blue.lighten-1
  {
    background-color: #42A5F5 !important;
  }

  .blue-text.text-lighten-1
  {
    color: #42A5F5 !important;
  }

  .blue.darken-1
  {
    background-color: #1E88E5 !important;
  }

  .blue-text.text-darken-1
  {
    color: #1E88E5 !important;
  }

  .blue.darken-2
  {
    background-color: #1976D2 !important;
  }

  .blue-text.text-darken-2
  {
    color: #1976D2 !important;
  }

  .blue.darken-3
  {
    background-color: #1565C0 !important;
  }

  .blue-text.text-darken-3
  {
    color: #1565C0 !important;
  }

  .blue.darken-4
  {
    background-color: #0D47A1 !important;
  }

  .blue-text.text-darken-4
  {
    color: #0D47A1 !important;
  }

  .blue.accent-1
  {
    background-color: #82B1FF !important;
  }

  .blue-text.text-accent-1
  {
    color: #82B1FF !important;
  }

  .blue.accent-2
  {
    background-color: #448AFF !important;
  }

  .blue-text.text-accent-2
  {
    color: #448AFF !important;
  }

  .blue.accent-3
  {
    background-color: #2979FF !important;
  }

  .blue-text.text-accent-3
  {
    color: #2979FF !important;
  }

  .blue.accent-4
  {
    background-color: #2962FF !important;
  }

  .blue-text.text-accent-4
  {
    color: #2962FF !important;
  }

  .light-blue
  {
    background-color: #03a9f4 !important;
  }

  .light-blue-text
  {
    color: #03a9f4 !important;
  }

  .light-blue.lighten-5
  {
    background-color: #e1f5fe !important;
  }

  .light-blue-text.text-lighten-5
  {
    color: #e1f5fe !important;
  }

  .light-blue.lighten-4
  {
    background-color: #b3e5fc !important;
  }

  .light-blue-text.text-lighten-4
  {
    color: #b3e5fc !important;
  }

  .light-blue.lighten-3
  {
    background-color: #81d4fa !important;
  }

  .light-blue-text.text-lighten-3
  {
    color: #81d4fa !important;
  }

  .light-blue.lighten-2
  {
    background-color: #4fc3f7 !important;
  }

  .light-blue-text.text-lighten-2
  {
    color: #4fc3f7 !important;
  }

  .light-blue.lighten-1
  {
    background-color: #29b6f6 !important;
  }

  .light-blue-text.text-lighten-1
  {
    color: #29b6f6 !important;
  }

  .light-blue.darken-1
  {
    background-color: #039be5 !important;
  }

  .light-blue-text.text-darken-1
  {
    color: #039be5 !important;
  }

  .light-blue.darken-2
  {
    background-color: #0288d1 !important;
  }

  .light-blue-text.text-darken-2
  {
    color: #0288d1 !important;
  }

  .light-blue.darken-3
  {
    background-color: #0277bd !important;
  }

  .light-blue-text.text-darken-3
  {
    color: #0277bd !important;
  }

  .light-blue.darken-4
  {
    background-color: #01579b !important;
  }

  .light-blue-text.text-darken-4
  {
    color: #01579b !important;
  }

  .light-blue.accent-1
  {
    background-color: #80d8ff !important;
  }

  .light-blue-text.text-accent-1
  {
    color: #80d8ff !important;
  }

  .light-blue.accent-2
  {
    background-color: #40c4ff !important;
  }

  .light-blue-text.text-accent-2
  {
    color: #40c4ff !important;
  }

  .light-blue.accent-3
  {
    background-color: #00b0ff !important;
  }

  .light-blue-text.text-accent-3
  {
    color: #00b0ff !important;
  }

  .light-blue.accent-4
  {
    background-color: #0091ea !important;
  }

  .light-blue-text.text-accent-4
  {
    color: #0091ea !important;
  }

  .cyan
  {
    background-color: #00bcd4 !important;
  }

  .cyan-text
  {
    color: #00bcd4 !important;
  }

  .cyan.lighten-5
  {
    background-color: #e0f7fa !important;
  }

  .cyan-text.text-lighten-5
  {
    color: #e0f7fa !important;
  }

  .cyan.lighten-4
  {
    background-color: #b2ebf2 !important;
  }

  .cyan-text.text-lighten-4
  {
    color: #b2ebf2 !important;
  }

  .cyan.lighten-3
  {
    background-color: #80deea !important;
  }

  .cyan-text.text-lighten-3
  {
    color: #80deea !important;
  }

  .cyan.lighten-2
  {
    background-color: #4dd0e1 !important;
  }

  .cyan-text.text-lighten-2
  {
    color: #4dd0e1 !important;
  }

  .cyan.lighten-1
  {
    background-color: #26c6da !important;
  }

  .cyan-text.text-lighten-1
  {
    color: #26c6da !important;
  }

  .cyan.darken-1
  {
    background-color: #00acc1 !important;
  }

  .cyan-text.text-darken-1
  {
    color: #00acc1 !important;
  }

  .cyan.darken-2
  {
    background-color: #0097a7 !important;
  }

  .cyan-text.text-darken-2
  {
    color: #0097a7 !important;
  }

  .cyan.darken-3
  {
    background-color: #00838f !important;
  }

  .cyan-text.text-darken-3
  {
    color: #00838f !important;
  }

  .cyan.darken-4
  {
    background-color: #006064 !important;
  }

  .cyan-text.text-darken-4
  {
    color: #006064 !important;
  }

  .cyan.accent-1
  {
    background-color: #84ffff !important;
  }

  .cyan-text.text-accent-1
  {
    color: #84ffff !important;
  }

  .cyan.accent-2
  {
    background-color: #18ffff !important;
  }

  .cyan-text.text-accent-2
  {
    color: #18ffff !important;
  }

  .cyan.accent-3
  {
    background-color: #00e5ff !important;
  }

  .cyan-text.text-accent-3
  {
    color: #00e5ff !important;
  }

  .cyan.accent-4
  {
    background-color: #00b8d4 !important;
  }

  .cyan-text.text-accent-4
  {
    color: #00b8d4 !important;
  }

  .teal
  {
    background-color: #009688 !important;
  }

  .teal-text
  {
    color: #009688 !important;
  }

  .teal.lighten-5
  {
    background-color: #e0f2f1 !important;
  }

  .teal-text.text-lighten-5
  {
    color: #e0f2f1 !important;
  }

  .teal.lighten-4
  {
    background-color: #b2dfdb !important;
  }

  .teal-text.text-lighten-4
  {
    color: #b2dfdb !important;
  }

  .teal.lighten-3
  {
    background-color: #80cbc4 !important;
  }

  .teal-text.text-lighten-3
  {
    color: #80cbc4 !important;
  }

  .teal.lighten-2
  {
    background-color: #4db6ac !important;
  }

  .teal-text.text-lighten-2
  {
    color: #4db6ac !important;
  }

  .teal.lighten-1
  {
    background-color: #26a69a !important;
  }

  .teal-text.text-lighten-1
  {
    color: #26a69a !important;
  }

  .teal.darken-1
  {
    background-color: #00897b !important;
  }

  .teal-text.text-darken-1
  {
    color: #00897b !important;
  }

  .teal.darken-2
  {
    background-color: #00796b !important;
  }

  .teal-text.text-darken-2
  {
    color: #00796b !important;
  }

  .teal.darken-3
  {
    background-color: #00695c !important;
  }

  .teal-text.text-darken-3
  {
    color: #00695c !important;
  }

  .teal.darken-4
  {
    background-color: #004d40 !important;
  }

  .teal-text.text-darken-4
  {
    color: #004d40 !important;
  }

  .teal.accent-1
  {
    background-color: #a7ffeb !important;
  }

  .teal-text.text-accent-1
  {
    color: #a7ffeb !important;
  }

  .teal.accent-2
  {
    background-color: #64ffda !important;
  }

  .teal-text.text-accent-2
  {
    color: #64ffda !important;
  }

  .teal.accent-3
  {
    background-color: #1de9b6 !important;
  }

  .teal-text.text-accent-3
  {
    color: #1de9b6 !important;
  }

  .teal.accent-4
  {
    background-color: #00bfa5 !important;
  }

  .teal-text.text-accent-4
  {
    color: #00bfa5 !important;
  }

  .green
  {
    background-color: #4CAF50 !important;
  }

  .green-text
  {
    color: #4CAF50 !important;
  }

  .green.lighten-5
  {
    background-color: #E8F5E9 !important;
  }

  .green-text.text-lighten-5
  {
    color: #E8F5E9 !important;
  }

  .green.lighten-4
  {
    background-color: #C8E6C9 !important;
  }

  .green-text.text-lighten-4
  {
    color: #C8E6C9 !important;
  }

  .green.lighten-3
  {
    background-color: #A5D6A7 !important;
  }

  .green-text.text-lighten-3
  {
    color: #A5D6A7 !important;
  }

  .green.lighten-2
  {
    background-color: #81C784 !important;
  }

  .green-text.text-lighten-2
  {
    color: #81C784 !important;
  }

  .green.lighten-1
  {
    background-color: #66BB6A !important;
  }

  .green-text.text-lighten-1
  {
    color: #66BB6A !important;
  }

  .green.darken-1
  {
    background-color: #43A047 !important;
  }

  .green-text.text-darken-1
  {
    color: #43A047 !important;
  }

  .green.darken-2
  {
    background-color: #388E3C !important;
  }

  .green-text.text-darken-2
  {
    color: #388E3C !important;
  }

  .green.darken-3
  {
    background-color: #2E7D32 !important;
  }

  .green-text.text-darken-3
  {
    color: #2E7D32 !important;
  }

  .green.darken-4
  {
    background-color: #1B5E20 !important;
  }

  .green-text.text-darken-4
  {
    color: #1B5E20 !important;
  }

  .green.accent-1
  {
    background-color: #B9F6CA !important;
  }

  .green-text.text-accent-1
  {
    color: #B9F6CA !important;
  }

  .green.accent-2
  {
    background-color: #69F0AE !important;
  }

  .green-text.text-accent-2
  {
    color: #69F0AE !important;
  }

  .green.accent-3
  {
    background-color: #00E676 !important;
  }

  .green-text.text-accent-3
  {
    color: #00E676 !important;
  }

  .green.accent-4
  {
    background-color: #00C853 !important;
  }

  .green-text.text-accent-4
  {
    color: #00C853 !important;
  }

  .light-green
  {
    background-color: #8bc34a !important;
  }

  .light-green-text
  {
    color: #8bc34a !important;
  }

  .light-green.lighten-5
  {
    background-color: #f1f8e9 !important;
  }

  .light-green-text.text-lighten-5
  {
    color: #f1f8e9 !important;
  }

  .light-green.lighten-4
  {
    background-color: #dcedc8 !important;
  }

  .light-green-text.text-lighten-4
  {
    color: #dcedc8 !important;
  }

  .light-green.lighten-3
  {
    background-color: #c5e1a5 !important;
  }

  .light-green-text.text-lighten-3
  {
    color: #c5e1a5 !important;
  }

  .light-green.lighten-2
  {
    background-color: #aed581 !important;
  }

  .light-green-text.text-lighten-2
  {
    color: #aed581 !important;
  }

  .light-green.lighten-1
  {
    background-color: #9ccc65 !important;
  }

  .light-green-text.text-lighten-1
  {
    color: #9ccc65 !important;
  }

  .light-green.darken-1
  {
    background-color: #7cb342 !important;
  }

  .light-green-text.text-darken-1
  {
    color: #7cb342 !important;
  }

  .light-green.darken-2
  {
    background-color: #689f38 !important;
  }

  .light-green-text.text-darken-2
  {
    color: #689f38 !important;
  }

  .light-green.darken-3
  {
    background-color: #558b2f !important;
  }

  .light-green-text.text-darken-3
  {
    color: #558b2f !important;
  }

  .light-green.darken-4
  {
    background-color: #33691e !important;
  }

  .light-green-text.text-darken-4
  {
    color: #33691e !important;
  }

  .light-green.accent-1
  {
    background-color: #ccff90 !important;
  }

  .light-green-text.text-accent-1
  {
    color: #ccff90 !important;
  }

  .light-green.accent-2
  {
    background-color: #b2ff59 !important;
  }

  .light-green-text.text-accent-2
  {
    color: #b2ff59 !important;
  }

  .light-green.accent-3
  {
    background-color: #76ff03 !important;
  }

  .light-green-text.text-accent-3
  {
    color: #76ff03 !important;
  }

  .light-green.accent-4
  {
    background-color: #64dd17 !important;
  }

  .light-green-text.text-accent-4
  {
    color: #64dd17 !important;
  }

  .lime
  {
    background-color: #cddc39 !important;
  }

  .lime-text
  {
    color: #cddc39 !important;
  }

  .lime.lighten-5
  {
    background-color: #f9fbe7 !important;
  }

  .lime-text.text-lighten-5
  {
    color: #f9fbe7 !important;
  }

  .lime.lighten-4
  {
    background-color: #f0f4c3 !important;
  }

  .lime-text.text-lighten-4
  {
    color: #f0f4c3 !important;
  }

  .lime.lighten-3
  {
    background-color: #e6ee9c !important;
  }

  .lime-text.text-lighten-3
  {
    color: #e6ee9c !important;
  }

  .lime.lighten-2
  {
    background-color: #dce775 !important;
  }

  .lime-text.text-lighten-2
  {
    color: #dce775 !important;
  }

  .lime.lighten-1
  {
    background-color: #d4e157 !important;
  }

  .lime-text.text-lighten-1
  {
    color: #d4e157 !important;
  }

  .lime.darken-1
  {
    background-color: #c0ca33 !important;
  }

  .lime-text.text-darken-1
  {
    color: #c0ca33 !important;
  }

  .lime.darken-2
  {
    background-color: #afb42b !important;
  }

  .lime-text.text-darken-2
  {
    color: #afb42b !important;
  }

  .lime.darken-3
  {
    background-color: #9e9d24 !important;
  }

  .lime-text.text-darken-3
  {
    color: #9e9d24 !important;
  }

  .lime.darken-4
  {
    background-color: #827717 !important;
  }

  .lime-text.text-darken-4
  {
    color: #827717 !important;
  }

  .lime.accent-1
  {
    background-color: #f4ff81 !important;
  }

  .lime-text.text-accent-1
  {
    color: #f4ff81 !important;
  }

  .lime.accent-2
  {
    background-color: #eeff41 !important;
  }

  .lime-text.text-accent-2
  {
    color: #eeff41 !important;
  }

  .lime.accent-3
  {
    background-color: #c6ff00 !important;
  }

  .lime-text.text-accent-3
  {
    color: #c6ff00 !important;
  }

  .lime.accent-4
  {
    background-color: #aeea00 !important;
  }

  .lime-text.text-accent-4
  {
    color: #aeea00 !important;
  }

  .yellow
  {
    background-color: #ffeb3b !important;
  }

  .yellow-text
  {
    color: #ffeb3b !important;
  }

  .yellow.lighten-5
  {
    background-color: #fffde7 !important;
  }

  .yellow-text.text-lighten-5
  {
    color: #fffde7 !important;
  }

  .yellow.lighten-4
  {
    background-color: #fff9c4 !important;
  }

  .yellow-text.text-lighten-4
  {
    color: #fff9c4 !important;
  }

  .yellow.lighten-3
  {
    background-color: #fff59d !important;
  }

  .yellow-text.text-lighten-3
  {
    color: #fff59d !important;
  }

  .yellow.lighten-2
  {
    background-color: #fff176 !important;
  }

  .yellow-text.text-lighten-2
  {
    color: #fff176 !important;
  }

  .yellow.lighten-1
  {
    background-color: #ffee58 !important;
  }

  .yellow-text.text-lighten-1
  {
    color: #ffee58 !important;
  }

  .yellow.darken-1
  {
    background-color: #fdd835 !important;
  }

  .yellow-text.text-darken-1
  {
    color: #fdd835 !important;
  }

  .yellow.darken-2
  {
    background-color: #fbc02d !important;
  }

  .yellow-text.text-darken-2
  {
    color: #fbc02d !important;
  }

  .yellow.darken-3
  {
    background-color: #f9a825 !important;
  }

  .yellow-text.text-darken-3
  {
    color: #f9a825 !important;
  }

  .yellow.darken-4
  {
    background-color: #f57f17 !important;
  }

  .yellow-text.text-darken-4
  {
    color: #f57f17 !important;
  }

  .yellow.accent-1
  {
    background-color: #ffff8d !important;
  }

  .yellow-text.text-accent-1
  {
    color: #ffff8d !important;
  }

  .yellow.accent-2
  {
    background-color: #ffff00 !important;
  }

  .yellow-text.text-accent-2
  {
    color: #ffff00 !important;
  }

  .yellow.accent-3
  {
    background-color: #ffea00 !important;
  }

  .yellow-text.text-accent-3
  {
    color: #ffea00 !important;
  }

  .yellow.accent-4
  {
    background-color: #ffd600 !important;
  }

  .yellow-text.text-accent-4
  {
    color: #ffd600 !important;
  }

  .amber
  {
    background-color: #ffc107 !important;
  }

  .amber-text
  {
    color: #ffc107 !important;
  }

  .amber.lighten-5
  {
    background-color: #fff8e1 !important;
  }

  .amber-text.text-lighten-5
  {
    color: #fff8e1 !important;
  }

  .amber.lighten-4
  {
    background-color: #ffecb3 !important;
  }

  .amber-text.text-lighten-4
  {
    color: #ffecb3 !important;
  }

  .amber.lighten-3
  {
    background-color: #ffe082 !important;
  }

  .amber-text.text-lighten-3
  {
    color: #ffe082 !important;
  }

  .amber.lighten-2
  {
    background-color: #ffd54f !important;
  }

  .amber-text.text-lighten-2
  {
    color: #ffd54f !important;
  }

  .amber.lighten-1
  {
    background-color: #ffca28 !important;
  }

  .amber-text.text-lighten-1
  {
    color: #ffca28 !important;
  }

  .amber.darken-1
  {
    background-color: #ffb300 !important;
  }

  .amber-text.text-darken-1
  {
    color: #ffb300 !important;
  }

  .amber.darken-2
  {
    background-color: #ffa000 !important;
  }

  .amber-text.text-darken-2
  {
    color: #ffa000 !important;
  }

  .amber.darken-3
  {
    background-color: #ff8f00 !important;
  }

  .amber-text.text-darken-3
  {
    color: #ff8f00 !important;
  }

  .amber.darken-4
  {
    background-color: #ff6f00 !important;
  }

  .amber-text.text-darken-4
  {
    color: #ff6f00 !important;
  }

  .amber.accent-1
  {
    background-color: #ffe57f !important;
  }

  .amber-text.text-accent-1
  {
    color: #ffe57f !important;
  }

  .amber.accent-2
  {
    background-color: #ffd740 !important;
  }

  .amber-text.text-accent-2
  {
    color: #ffd740 !important;
  }

  .amber.accent-3
  {
    background-color: #ffc400 !important;
  }

  .amber-text.text-accent-3
  {
    color: #ffc400 !important;
  }

  .amber.accent-4
  {
    background-color: #ffab00 !important;
  }

  .amber-text.text-accent-4
  {
    color: #ffab00 !important;
  }

  .orange
  {
    background-color: #ff9800 !important;
  }

  .orange-text
  {
    color: #ff9800 !important;
  }

  .orange.lighten-5
  {
    background-color: #fff3e0 !important;
  }

  .orange-text.text-lighten-5
  {
    color: #fff3e0 !important;
  }

  .orange.lighten-4
  {
    background-color: #ffe0b2 !important;
  }

  .orange-text.text-lighten-4
  {
    color: #ffe0b2 !important;
  }

  .orange.lighten-3
  {
    background-color: #ffcc80 !important;
  }

  .orange-text.text-lighten-3
  {
    color: #ffcc80 !important;
  }

  .orange.lighten-2
  {
    background-color: #ffb74d !important;
  }

  .orange-text.text-lighten-2
  {
    color: #ffb74d !important;
  }

  .orange.lighten-1
  {
    background-color: #ffa726 !important;
  }

  .orange-text.text-lighten-1
  {
    color: #ffa726 !important;
  }

  .orange.darken-1
  {
    background-color: #fb8c00 !important;
  }

  .orange-text.text-darken-1
  {
    color: #fb8c00 !important;
  }

  .orange.darken-2
  {
    background-color: #f57c00 !important;
  }

  .orange-text.text-darken-2
  {
    color: #f57c00 !important;
  }

  .orange.darken-3
  {
    background-color: #ef6c00 !important;
  }

  .orange-text.text-darken-3
  {
    color: #ef6c00 !important;
  }

  .orange.darken-4
  {
    background-color: #e65100 !important;
  }

  .orange-text.text-darken-4
  {
    color: #e65100 !important;
  }

  .orange.accent-1
  {
    background-color: #ffd180 !important;
  }

  .orange-text.text-accent-1
  {
    color: #ffd180 !important;
  }

  .orange.accent-2
  {
    background-color: #ffab40 !important;
  }

  .orange-text.text-accent-2
  {
    color: #ffab40 !important;
  }

  .orange.accent-3
  {
    background-color: #ff9100 !important;
  }

  .orange-text.text-accent-3
  {
    color: #ff9100 !important;
  }

  .orange.accent-4
  {
    background-color: #ff6d00 !important;
  }

  .orange-text.text-accent-4
  {
    color: #ff6d00 !important;
  }

  .deep-orange
  {
    background-color: #ff5722 !important;
  }

  .deep-orange-text
  {
    color: #ff5722 !important;
  }

  .deep-orange.lighten-5
  {
    background-color: #fbe9e7 !important;
  }

  .deep-orange-text.text-lighten-5
  {
    color: #fbe9e7 !important;
  }

  .deep-orange.lighten-4
  {
    background-color: #ffccbc !important;
  }

  .deep-orange-text.text-lighten-4
  {
    color: #ffccbc !important;
  }

  .deep-orange.lighten-3
  {
    background-color: #ffab91 !important;
  }

  .deep-orange-text.text-lighten-3
  {
    color: #ffab91 !important;
  }

  .deep-orange.lighten-2
  {
    background-color: #ff8a65 !important;
  }

  .deep-orange-text.text-lighten-2
  {
    color: #ff8a65 !important;
  }

  .deep-orange.lighten-1
  {
    background-color: #ff7043 !important;
  }

  .deep-orange-text.text-lighten-1
  {
    color: #ff7043 !important;
  }

  .deep-orange.darken-1
  {
    background-color: #f4511e !important;
  }

  .deep-orange-text.text-darken-1
  {
    color: #f4511e !important;
  }

  .deep-orange.darken-2
  {
    background-color: #e64a19 !important;
  }

  .deep-orange-text.text-darken-2
  {
    color: #e64a19 !important;
  }

  .deep-orange.darken-3
  {
    background-color: #d84315 !important;
  }

  .deep-orange-text.text-darken-3
  {
    color: #d84315 !important;
  }

  .deep-orange.darken-4
  {
    background-color: #bf360c !important;
  }

  .deep-orange-text.text-darken-4
  {
    color: #bf360c !important;
  }

  .deep-orange.accent-1
  {
    background-color: #ff9e80 !important;
  }

  .deep-orange-text.text-accent-1
  {
    color: #ff9e80 !important;
  }

  .deep-orange.accent-2
  {
    background-color: #ff6e40 !important;
  }

  .deep-orange-text.text-accent-2
  {
    color: #ff6e40 !important;
  }

  .deep-orange.accent-3
  {
    background-color: #ff3d00 !important;
  }

  .deep-orange-text.text-accent-3
  {
    color: #ff3d00 !important;
  }

  .deep-orange.accent-4
  {
    background-color: #dd2c00 !important;
  }

  .deep-orange-text.text-accent-4
  {
    color: #dd2c00 !important;
  }

  .brown
  {
    background-color: #795548 !important;
  }

  .brown-text
  {
    color: #795548 !important;
  }

  .brown.lighten-5
  {
    background-color: #efebe9 !important;
  }

  .brown-text.text-lighten-5
  {
    color: #efebe9 !important;
  }

  .brown.lighten-4
  {
    background-color: #d7ccc8 !important;
  }

  .brown-text.text-lighten-4
  {
    color: #d7ccc8 !important;
  }

  .brown.lighten-3
  {
    background-color: #bcaaa4 !important;
  }

  .brown-text.text-lighten-3
  {
    color: #bcaaa4 !important;
  }

  .brown.lighten-2
  {
    background-color: #a1887f !important;
  }

  .brown-text.text-lighten-2
  {
    color: #a1887f !important;
  }

  .brown.lighten-1
  {
    background-color: #8d6e63 !important;
  }

  .brown-text.text-lighten-1
  {
    color: #8d6e63 !important;
  }

  .brown.darken-1
  {
    background-color: #6d4c41 !important;
  }

  .brown-text.text-darken-1
  {
    color: #6d4c41 !important;
  }

  .brown.darken-2
  {
    background-color: #5d4037 !important;
  }

  .brown-text.text-darken-2
  {
    color: #5d4037 !important;
  }

  .brown.darken-3
  {
    background-color: #4e342e !important;
  }

  .brown-text.text-darken-3
  {
    color: #4e342e !important;
  }

  .brown.darken-4
  {
    background-color: #3e2723 !important;
  }

  .brown-text.text-darken-4
  {
    color: #3e2723 !important;
  }

  .blue-grey
  {
    background-color: #607d8b !important;
  }

  .blue-grey-text
  {
    color: #607d8b !important;
  }

  .blue-grey.lighten-5
  {
    background-color: #eceff1 !important;
  }

  .blue-grey-text.text-lighten-5
  {
    color: #eceff1 !important;
  }

  .blue-grey.lighten-4
  {
    background-color: #cfd8dc !important;
  }

  .blue-grey-text.text-lighten-4
  {
    color: #cfd8dc !important;
  }

  .blue-grey.lighten-3
  {
    background-color: #b0bec5 !important;
  }

  .blue-grey-text.text-lighten-3
  {
    color: #b0bec5 !important;
  }

  .blue-grey.lighten-2
  {
    background-color: #90a4ae !important;
  }

  .blue-grey-text.text-lighten-2
  {
    color: #90a4ae !important;
  }

  .blue-grey.lighten-1
  {
    background-color: #78909c !important;
  }

  .blue-grey-text.text-lighten-1
  {
    color: #78909c !important;
  }

  .blue-grey.darken-1
  {
    background-color: #546e7a !important;
  }

  .blue-grey-text.text-darken-1
  {
    color: #546e7a !important;
  }

  .blue-grey.darken-2
  {
    background-color: #455a64 !important;
  }

  .blue-grey-text.text-darken-2
  {
    color: #455a64 !important;
  }

  .blue-grey.darken-3
  {
    background-color: #37474f !important;
  }

  .blue-grey-text.text-darken-3
  {
    color: #37474f !important;
  }

  .blue-grey.darken-4
  {
    background-color: #263238 !important;
  }

  .blue-grey-text.text-darken-4
  {
    color: #263238 !important;
  }

  .grey
  {
    background-color: #9e9e9e !important;
  }

  .grey-text
  {
    color: #9e9e9e !important;
  }

  .grey.lighten-5
  {
    background-color: #fafafa !important;
  }

  .grey-text.text-lighten-5
  {
    color: #fafafa !important;
  }

  .grey.lighten-4
  {
    background-color: #f5f5f5 !important;
  }

  .grey-text.text-lighten-4
  {
    color: #f5f5f5 !important;
  }

  .grey.lighten-3
  {
    background-color: #eeeeee !important;
  }

  .grey-text.text-lighten-3
  {
    color: #eeeeee !important;
  }

  .grey.lighten-2
  {
    background-color: #e0e0e0 !important;
  }

  .grey-text.text-lighten-2
  {
    color: #e0e0e0 !important;
  }

  .grey.lighten-1
  {
    background-color: #bdbdbd !important;
  }

  .grey-text.text-lighten-1
  {
    color: #bdbdbd !important;
  }

  .grey.darken-1
  {
    background-color: #757575 !important;
  }

  .grey-text.text-darken-1
  {
    color: #757575 !important;
  }

  .grey.darken-2
  {
    background-color: #616161 !important;
  }

  .grey-text.text-darken-2
  {
    color: #616161 !important;
  }

  .grey.darken-3
  {
    background-color: #424242 !important;
  }

  .grey-text.text-darken-3
  {
    color: #424242 !important;
  }

  .grey.darken-4
  {
    background-color: #212121 !important;
  }

  .grey-text.text-darken-4
  {
    color: #212121 !important;
  }

  .black
  {
    background-color: #000000 !important;
  }

  .black-text
  {
    color: #000000 !important;
  }

  .white
  {
    background-color: #FFFFFF !important;
  }

  .white-text
  {
    color: #FFFFFF !important;
  }

  .transparent
  {
    background-color: transparent !important;
  }

  .transparent-text
  {
    color: transparent !important;
  }

  a
  {
    text-decoration: none;
  }

  html
  {
    line-height: 1.5;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif;
    font-weight: normal;
    color: rgba(0, 0, 0, 0.87);
  }

@media only screen and (min-width: 0)
  {
    html {
    font-size: 14px;
  }
}

@media only screen and (min-width: 992px)
{
  html
  {
    font-size: 14.5px;
  }
}

@media only screen and (min-width: 1200px)
{
  html
  {
    font-size: 15px;
  }
}

h1, h2, h3, h4, h5, h6
{
  font-weight: 400;
  line-height: 1.3;
}

h1 a, h2 a, h3 a, h4 a, h5 a, h6 a
{
  font-weight: inherit;
}

h1
{
/*  font-size: 4.2rem; */
  line-height: 110%;
  margin: 2.8rem 0 1.68rem 0;
}

h2
{
/*  font-size: 3.56rem;*/
  line-height: 110%;
  margin: 2.37333rem 0 1.424rem 0;
}

h3
{
  font-size: 1.15rem;
  line-height: 110%;
  margin: 1.94667rem 0 1.168rem 0;
}

h4
{
  font-size: 1.15rem;
  line-height: 110%;
  margin: 1.52rem 0 0.912rem 0;
}

h5
{
  font-size: 1.15rem;
  line-height: 110%;
  margin: 1.09333rem 0 0.656rem 0;
}

h6
{
  font-size: 1.15rem;
  line-height: 110%;
  margin: 0.76667rem 0 0.46rem 0;
}

em
{
  font-style: italic;
}

strong
{
  font-weight: 500;
}

small
{
  font-size: 75%;
}

.light
{
  font-weight: 300;
}

.thin
{
  font-weight: 200;
}

.flow-text
{
  font-weight: 300;
}

@media only screen and (min-width: 360px)
{
  .flow-text
  {
    font-size: 1.2rem;
  }
}

@media only screen and (min-width: 390px)
{
  .flow-text
  {
    font-size: 1.224rem;
  }
}

@media only screen and (min-width: 420px)
{
  .flow-text
  {
    font-size: 1.248rem;
  }
}

@media only screen and (min-width: 450px)
{
  .flow-text
  {
    font-size: 1.272rem;
  }
}

@media only screen and (min-width: 480px)
{
  .flow-text
  {
    font-size: 1.296rem;
  }
}

@media only screen and (min-width: 510px)
{
  .flow-text
  {
    font-size: 1.32rem;
  }
}

@media only screen and (min-width: 540px)
{
  .flow-text
  {
    font-size: 1.344rem;
  }
}

@media only screen and (min-width: 570px)
{
  .flow-text
  {
    font-size: 1.368rem;
  }
}

@media only screen and (min-width: 600px)
{
  .flow-text
  {
    font-size: 1.392rem;
  }
}

@media only screen and (min-width: 630px)
{
  .flow-text
  {
    font-size: 1.416rem;
  }
}

@media only screen and (min-width: 660px)
{
  .flow-text
  {
    font-size: 1.44rem;
  }
}

@media only screen and (min-width: 690px)
{
  .flow-text
  {
    font-size: 1.464rem;
  }
}

@media only screen and (min-width: 720px)
{
  .flow-text
  {
    font-size: 1.488rem;
  }
}

@media only screen and (min-width: 750px)
{
  .flow-text
  {
    font-size: 1.512rem;
  }
}

@media only screen and (min-width: 780px)
{
  .flow-text
  {
    font-size: 1.536rem;
  }
}

@media only screen and (min-width: 810px)
{
  .flow-text
  {
    font-size: 1.56rem;
  }
}

@media only screen and (min-width: 840px)
{
  .flow-text
  {
    font-size: 1.584rem;
  }
}

@media only screen and (min-width: 870px)
{
  .flow-text
  {
    font-size: 1.608rem;
  }
}

@media only screen and (min-width: 900px)
{
  .flow-text
  {
    font-size: 1.632rem;
  }
}

@media only screen and (min-width: 930px)
{
  .flow-text
  {
    font-size: 1.656rem;
  }
}

@media only screen and (min-width: 960px)
{
  .flow-text
  {
    font-size: 1.68rem;
  }
}

@media only screen and (max-width: 360px)
{
  .flow-text
  {
    font-size: 1.2rem;
  }
}

.nav-link, .global-nav-bar-wrap .global-nav-bar.logout a, .bgBanner a
{
  background: none !important;
  border: none !important;
  color: #fff;
  font-size: 1rem;
  font-weight: 400 !important;
  height: auto !important;
  line-height: 64px;
  outline: none !important;
  padding: 0 15px;
  position: static;
  text-shadow: none !important;
  transition: background-color .2s;
  width: auto !important;
}

.nav-link:hover, .global-nav-bar-wrap .global-nav-bar.logout a:hover, .bgBanner a:hover
{
  background-color: rgba(0, 0, 0, 0.1) !important;
}

.nav-link span, .global-nav-bar-wrap .global-nav-bar.logout a span, .bgBanner a span
{
  border: none !important;
  padding: 0 !important;
}

.card, #content .portlet
{
  border: none;
  border-radius: 2px;
  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 3px 1px -2px rgba(0, 0, 0, 0.12), 0 1px 5px 0 rgba(0, 0, 0, 0.2);
  padding: 24px;
}

.card h2, #content .portlet h2
{
  background: none;
  color: inherit;
  font-size: 24px;
  margin-bottom: 8px;
  padding: 0;
  text-shadow: none;
}

.card .collapsible, #content .portlet .collapsible
{
  border: none;
  padding: 0;
}

.card .collapsible a, #content .portlet .collapsible a
{
  text-decoration: none !important;
}

.card .collapsible a span, #content .portlet .collapsible a span
{
  color: inherit !important;
  font-size: 1rem;
}

.vertical-nav-link, .locationPane .navigationPane .navPaletteTitle, .locationPane .navigationPane .courseMenu a
{
  color: rgba(0, 0, 0, 0.87) !important;
  font-size: 13px;
  padding: 10px 30px;
  transition: background-color .2s;
}

.vertical-nav-link span, .locationPane .navigationPane .navPaletteTitle span, .locationPane .navigationPane .courseMenu a span
{
  color: rgba(0, 0, 0, 0.87) !important;
}

.vertical-nav-link:hover, .locationPane .navigationPane .navPaletteTitle:hover, .locationPane .navigationPane .courseMenu a:hover
{
  background-color: rgba(0, 0, 0, 0.05);
  text-decoration: none !important;
}

.vertical-nav-link:hover span, .locationPane .navigationPane .navPaletteTitle:hover span, .locationPane .navigationPane .courseMenu a:hover span
{
  color: rgba(0, 0, 0, 0.87) !important;
}

.box-shadow, .bgBanner, .locationPane .navigationPane, .locationPane .container #uploadAssignmentFormId .submitStepBottom.submitStepFixed
{
  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 3px 1px -2px rgba(0, 0, 0, 0.12), 0 1px 5px 0 rgba(0, 0, 0, 0.2);
}

body
{
  background: none;
  font-size: 15px !important;
}

a
{
  outline: none !important;
}

#quick_links_wrap
{
  display: none;
}

.global-nav-bar-wrap .global-nav-bar.logout a
{
  margin-right: 0.75rem;
  text-indent: 0 !important;
}

.global-nav-bar-wrap #global-nav-link #global-avatar,
.global-nav-bar-wrap #global-nav-link #global-toggle-img
{
  display: none;
}

.global-nav-bar-wrap #global-nav-link #badgeTotalCount
{
  background-color: #26a69a;
  font-size: 0.8rem;
  font-weight: 300;
  height: auto;
  line-height: 22px;
  padding: 0 6px !important;
  position: static;
  width: auto;
}

.bgBanner
{
  background: linear-gradient(87deg,#4CB8C4 0, #3CD3AD 100%) !important;
/*  background-image: none !important;*/
  display: flex;
  height: auto;
  padding: 0 0.75rem;
  z-index: 10;
}

.bgBanner a
{
  font-size: 1.2rem;
  font-weight: normal !important;
}

.bgBanner .tabWrapper-right
{
  padding: 0 0.75rem !important;
}

.bgBanner .appTabs
{
  float: none !important;
}

.bgBanner .appTabs a
{
  font-weight: 400 !important;
  font-size: 1rem;
}

.bgBanner .appTabs a:hover
{
  background-color: rgba(0, 0, 0, 0.1) !important;
}

.bgBanner .appTabs a span
{
  border: none !important;
  padding: 0 !important;
}

.bgBanner .appTabs .active a
{
  background-color: rgba(0, 0, 0, 0.1) !important;
}

.brandingImgWrap
{
  height: auto;
}

.brandingImgWrap a:before
{
  content: 'CUHKSZ';
}

.brandingImgWrap a img
{
  display: none;
}

.hideoff
{
  display: none;
}

.breadcrumbs
{
  background-color: #eeeeee !important;
  border: none !important;
  border-radius: 0;
  font-size: 1.1rem;
  height: 45px;
  line-height: 45px;
  margin: 0 0 0 210px !important;
  padding: 0 0.75rem !important;
}

.breadcrumbs .coursePath
{
  display: none;
}

.breadcrumbs ol
{
  padding: 0 15px;
}



.breadcrumbs .helpLink
{
  display: none;
}

#content
{
  border: none !important;
  box-shadow: none !important;
  padding: 0 !important;
}

#content .contentBox
{
  border: none !important;
  box-shadow: none !important;
}

#content .containerPortal
{
  border: none !important;
  box-shadow: none !important;
  padding: 0 !important;
}

.locationPane
{
  margin: 0 !important;
  padding: 0 !important;
}

.locationPane .navigationPane
{
  background-color: #fff;
  height: 100% !important;
  margin-top: -45px;
  padding-bottom: 45px;
  z-index: 9;
}

.locationPane .navigationPane .actionBarMicro
{
  display: none !important;
}

.locationPane .navigationPane .navPaletteTitle h3
{
  width: 100%;
  height: 100%;
}

.locationPane .navigationPane .navPaletteTitle h3 #courseMenu_combo
{
  height: 100%;
  opacity: 0;
  width: 100%;
}

.locationPane .navigationPane .navPaletteTitle .comboLink
{
  background: none;
  color: rgba(0, 0, 0, 0.87) !important;
  overflow: hidden;
  padding: 0;
}

.locationPane .navigationPane .courseMenu a
{
  margin: 0 !important;
}

.locationPane .navigationPane .courseMenu .divider
{
  padding: 5px 0 !important;
}

.locationPane .navigationPane .courseMenu .divider hr
{
  display: none;
}

.locationPane .menuWrap
{
  border: none;
  box-shadow: none;
}

.locationPane .menuWrap #puller
{
  display: none;
}

.locationPane .pageTitle
{
  display: none;
}

.locationPane #contentPanel .contentList
{
  margin: 0;
}

.locationPane #contentPanel .contentList li h3
{
  font-size: 16px;
}

.locationPane #contentPanel .contentList li h3 span
{
  border: none !important;
}

.locationPane #contentPanel .contentList li .item
{
  padding: 0 0 5px 50px;
}

.locationPane #contentPanel .contentList li .details
{
  color: rgba(0, 0, 0, 0.87);
  padding-left: 50px;
}

.locationPane #contentPanel .contentList li .details .contextItemDetailsHeaders
{
  margin-bottom: 5px;
  padding: 0;
}

.locationPane #contentPanel .contentList li .details .contextItemDetailsHeaders .detailsValue
{
  margin: 0;
}

.locationPane #contentPanel .contentList li .details .contextItemDetailsHeaders .detailsValue ul
{
  margin: 0;
}

.locationPane #contentPanel .contentList li .details .vtbegenerated ul
{
  padding: 0 0 0 1rem;
  margin: 0;
}

.locationPane .filterBarHorizontal,
.locationPane .localViewToggle
{
  background-color: #eeeeee !important;
  height: auto;
  margin: 0 -12px;
  padding: 0 12px;
}

.locationPane .filterBarHorizontal #filterby,
.locationPane .filterBarHorizontal ul,
.locationPane .localViewToggle #filterby,
.locationPane .localViewToggle ul
{
  box-shadow: none;
  clear: both;
  display: block;
  float: left;
  height: 48px;
  padding: 0;
}

.locationPane .filterBarHorizontal #filterby li,
.locationPane .filterBarHorizontal ul li,
.locationPane .localViewToggle #filterby li,
.locationPane .localViewToggle ul li
{
  display: inline-block;
}

.locationPane .filterBarHorizontal #filterby li a,
.locationPane .filterBarHorizontal ul li a,
.locationPane .localViewToggle #filterby li a,
.locationPane .localViewToggle ul li a
{
  background: none;
  border: transparent solid;
  border-width: 0 0 2px 0;
  border-radius: 0;
  box-shadow: none;
  box-sizing: border-box;
  color: #000;
  display: block;
  font-size: 14px;
  font-weight: normal;
  height: 48px;
  line-height: 48px;
  min-width: 0;
  padding: 0 24px;
  text-decoration: none;
  transition: border-color .2s;
  width: auto;
}

.locationPane .filterBarHorizontal #filterby li a.active,
.locationPane .filterBarHorizontal ul li a.active,
.locationPane .localViewToggle #filterby li a.active,
.locationPane .localViewToggle ul li a.active
{
  border-color: #000;
}

.locationPane .filterBarHorizontal #filterby li a:before, .locationPane .filterBarHorizontal #filterby li a:after,
.locationPane .filterBarHorizontal ul li a:before,
.locationPane .filterBarHorizontal ul li a:after,
.locationPane .localViewToggle #filterby li a:before,
.locationPane .localViewToggle #filterby li a:after,
.locationPane .localViewToggle ul li a:before,
.locationPane .localViewToggle ul li a:after
{
  display: none;
}

.locationPane .container
{
  padding: 20px 0;
}

.locationPane .container .grades_header
{
  color: #000 !important;
  font-weight: bold;
  height: auto;
  left: 0;
  width: 100%;
}

.locationPane .container #grades_wrapper
{
  margin-top: 73px;
}

.locationPane .container .cell
{
  font-size: 1rem !important;
  height: auto;
  padding: 10px 10px;
}

.locationPane .container .cell a
{
  font-size: .9rem !important;
  overflow: visible;
}

.locationPane .container .cell div, .locationPane .container .cell span
{
  margin-top: 5px;
}

.locationPane .container .cell .lastActivityDate,
.locationPane .container .cell .activityType,
.locationPane .container .cell .itemCat
{
  font-size: .8rem;
}

.locationPane .container .cell.grade span, .locationPane .container .cell.grade div
{
  font-size: .9rem;
  margin-top: 3px;
}

.locationPane .container .cell.grade .itemStats div
{
  font-size: .8rem;
}

.locationPane .container .cell .eval-links input
{
  font-size: .8rem;
}

.locationPane .container .calculatedRow
{
  background: #f2f2f2;
  box-shadow: none;
  padding: 5px 0;
}

.locationPane .container #announcementForm
{
  padding: 0 20px;
}

.locationPane .container #uploadAssignmentFormId
{
  padding: 0 20px;
}

.locationPane .container #uploadAssignmentFormId .submitStepBottom
{
  box-sizing: border-box;
}

.locationPane .container #uploadAssignmentFormId .submitStepBottom.submitStepFixed
{
  border: none;
  margin-left: -230px;
  padding: 0 20px 0 230px;
  width: 100% !important;
  z-index: 1;
}

#copyright .newCopyright
{
  padding: 5px 0;
}

/* BEGIN DISPLAY NONE */

#copyright .newCopyright .logo
{
  display: none;
}
#copyright .newCopyright .legal
{
    display:none;
}
.additionalInfo
{
    display: none;
}
.paneTabs ul li{
    display:none
}
.actionBar, .contentPaneWide .actionBar{
    display:none
}
::-webkit-scrollbar {
    width:6px;
    height:6px;
    background-color:#eee
}
#mo-nav::-webkit-scrollbar {
    width:0;
    opacity:0
}
::-webkit-scrollbar-track {
    background-color:#eee
}
::-webkit-scrollbar-thumb {
    background-color:#69d2e7
}
.card, #content .portlet {
    background: #ffffff;
    border-radius: 10px;
}
.actionMenuButton{
    border-radius: 25px !important;
}
#content .containerPortal{
    background: #eee
}
#contentArea, #schemePreviewBody, .container{
    background: #eee
}
.locationPane {
    background: #eee;
        min-height: 700px;
}
.contentList > li{
    background: #fff;
    border-radius: 25px;
    margin: 10px -1px;
    box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 3px 1px -2px rgba(0, 0, 0, 0.12), 0 1px 5px 0 rgba(0, 0, 0, 0.2);
    border-top-color: #fff;
}
div#module:_6_1.portlet.clearfix.reorderableModule{
    display:none !important;
}

#courseMenuPalette div.navPaletteContent {
    background-color: white;
}
.locationPane .navigationPane .navPaletteTitle .comboLink {
    background: #fff;
    color: rgba(0, 0, 0, 0.87) !important;
    overflow: hidden;
    padding: 0;
    z-index: 100;
    position: relative !important;
}
 /*# sourceMappingURL= main.css.map */
`);