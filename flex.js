// Một số bài hát có thể bị lỗi do liên kết bị hỏng. Vui lòng thay thế liên kết khác để có thể phát
// Some songs may be faulty due to broken links. Please replace another link so that it can be played

const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const PlAYER_STORAGE_KEY = "F8_PLAYER";

const player = $(".player");
const cd = $(".cd");
const heading = $("header h2");
const cdThumb = $(".cd-thumb");
const audio = $("#audio");
const playBtn = $(".btn-toggle-play");
const progress = $("#progress");
const prevBtn = $(".btn-prev");
const nextBtn = $(".btn-next");
const randomBtn = $(".btn-random");
const repeatBtn = $(".btn-repeat");
const playlist = $(".playlist");

const app = {
  currentIndex: 0,
  isPlaying: false,
  isRandom: false,
  isRepeat: false,
  config: {},
  // (1/2) Uncomment the line below to use localStorage
  // config: JSON.parse(localStorage.getItem(PlAYER_STORAGE_KEY)) || {},
  songs: [

    {
      name: "Đúng Người Đúng Thời Điểm",
      singer: "",
      path: "/music/ms1.mp3",
      image: "/img/img2.jpg"
    },
    {
      name: "Nụ cười 18 20",
      singer: "",
      path: "/music/ms2.mp3",
      image: "/img/img2.jpg"
    },
    {
      name: "Yêu lại từ đầu",
      singer: "",
      path: "/music/ms3.mp3",
      image: "/img/img2.jpg"
    },
    {
      name: "she made me hurry",
      singer: "",
      path: "/music/s1.mp3",
      image: "/img/img2.jpg"
    },
    {
      name: " I made my decision.",
      singer: "",
      path: "/music/s2.mp3",
      image:
        "/img/img2.jpg"
    },
    {
      name: " They agreed to work together.",
      singer: "",
      path:
        "/music/s3.mp3",
      image: "/img/img2.jpg"
    },
    {
      name: "Tom concentrated on his work.",
      singer: "",
      path: "/music/s4.mp3",
      image:
        "/img/img2.jpg"
    },
    {
      name: " He came in through the window.",
      singer: "",
      path: "/music/s5.mp3",
      image:
        "/img/img2.jpg"
    },
    {
      name: " I cannot afford to buy such an expensive car",
      singer: " ",
      path:
        "/music/s6.mp3",
      image:
        "/img/img2.jpg"
    },
    {
      name: " You make me happy.",
      singer: " ",
      path: "/music/s7.mp3",
      image:
        "/img/img2.jpg"
    },
	{
		name: "Could I make a reservation",
		singer: " ",
		path: "/music/s8.mp3",
		image:
		  "/img/img2.jpg"
	  },
    {
      name: " PRACTICE DAY 1",
      singer: " ",
      path: "/music/d1.mp3",
      image:
        "/img/img2.jpg"
      },
    {
      name: "Get on the horse.",
      singer: " ",
      path: "/music/s11.mp3",
      image: "/img/img2.jpg"
    },
    {
      name: " Let's get off the bus.",
      singer: "",
      path: "/music/s12.mp3",
      image:
        "/img/img2.jpg"
    },
    {
      name: " When did you get home",
      singer: "",
      path:
        "/music/s13.mp3",
      image: "/img/img2.jpg"
    },
    {
      name: " He has his own room.",
      singer: "",
      path: "/music/s14.mp3",
      image:
        "/img/img2.jpg"
    },
    {
      name: " Do you think he did the job on his own",
      singer: "",
      path: "/music/s15.mp3",
      image:
        "/img/img2.jpg"
    },
    {
      name: "That's a good idea!",
      singer: " ",
      path:
        "/music/s16.mp3",
      image:
        "/img/img2.jpg"
    },
    {
      name: " Who do you think you are",
      singer: " ",
      path: "/music/s17.mp3",
      image:
        "/img/img2.jpg"
    },
	{
		name: " He is still alive.",
		singer: " ",
		path: "/music/s18.mp3",
		image:
		  "/img/img2.jpg"
	  },
    {
      name: "PRACTICE DAY 2",
      singer: " ",
      path: "/music/d2.mp3",
      image:
        "/img/img2.jpg"
      },
    {
      name: "I have to go even if it rains.",
      singer: " ",
      path: "/music/s21.mp3",
      image: "/img/img2.jpg"
    },
    {
      name: " He had to work even on Sunday.",
      singer: "",
      path: "/music/s22.mp3",
      image:
        "/img/img2.jpg"
    },
    {
      name: " I want to see the movie.",
      singer: "",
      path:
        "/music/s23.mp3",
      image: "/img/img2.jpg"
    },
    {
      name: " Many friends came to see me off.",
      singer: "",
      path: "/music/s24.mp3",
      image:
        "/img/img2.jpg"
    },
    {
      name: " They are both good teachers.",
      singer: "",
      path: "/music/s25.mp3",
      image:
        "/img/img2.jpg"
    },
    {
      name: " I don't agree with the government's policy on education.",
      singer: " ",
      path:
        "/music/s26.mp3",
      image:
        "/img/img2.jpg"
    },
    {
      name: " Do you know how to use a computer",
      singer: " ",
      path: "/music/s27.mp3",
      image:
        "/img/img2.jpg"
    },
    {
      name: "PRACTICE DAY 3",
      singer: " ",
      path: "/music/d3.mp3",
      image:
        "/img/img2.jpg"
    },
    {
      name: " Are they all the same",
      singer: " ",
      path: "/music/s31.mp3",
      image: "/img/img2.jpg"
    },
    {
      name: " Kim and I are the same age",
      singer: "",
      path: "/music/s32.mp3",
      image:
        "/img/img2.jpg"
    },
    {
      name: " What did you say",
      singer: "",
      path:
        "/music/s33.mp3",
      image: "/img/img2.jpg"
    },
    {
      name: " You must study your whole life.",
      singer: "",
      path: "/music/s34.mp3",
      image:
        "/img/img2.jpg"
    },
    {
      name: " lean against this wall.",
      singer: "",
      path: "/music/s35.mp3",
      image:
        "/img/img2.jpg"
    },
    {
      name: " I feel like another person",
      singer: " ",
      path:
        "/music/s36.mp3",
      image:
        "/img/img2.jpg"
    },
    {
      name: "PRACTICE DAY 4",
      singer: " ",
      path:
        "/music/d4.mp3",
      image:
        "/img/img2.jpg"
    },
    {
      name: " I'm going out for a while.",
      singer: " ",
      path: "/music/s41.mp3",
      image:
        "/img/img2.jpg"
    },
    {
      name: " I met him while he was in Japan.",
      singer: " ",
      path: "/music/s42.mp3",
      image: "/img/img2.jpg"
    },
    {
      name: " I need more time.",
      singer: "",
      path: "/music/s43.mp3",
      image:
        "/img/img2.jpg"
    },
    {
      name: " I need your advice.",
      singer: "",
      path:
        "/music/s44.mp3",
      image: "/img/img2.jpg"
    },
    {
      name: " We love each other.",
      singer: "",
      path: "/music/s45.mp3",
      image:
        "/img/img2.jpg"
    },
    {
      name: " Brush your teeth after each meal",
      singer: "",
      path: "/music/s46.mp3",
      image:
        "/img/img2.jpg"
    },
    {
      name: " This book is too old",
      singer: " ",
      path:
        "/music/s46-1.mp3",
      image:
        "/img/img2.jpg"
    },
    {
      name: " My parents are old.",
      singer: " ",
      path: "/music/s47.mp3",
      image:
        "/img/img2.jpg"
    },
    {
      name: " Do you have a part time job",
      singer: " ",
      path: "/music/s48.mp3",
      image:
        "/img/img2.jpg"
    },
    {
      name: "I am proud to be a part of this project.",
      singer: " ",
      path: "/music/s49.mp3",
      image:
        "/img/img2.jpg"
    },
    {
      name: "PRACTICE DAY 5",
      singer: " ",
      path: "/music/d5.mp3",
      image:
        "/img/img2.jpg"
    },
    {
      name: " He traveled all over the world",
      singer: " ",
      path: "/music/s51.mp3",
      image:
        "/img/img2.jpg"
    },
    {
      name: " That's what I thought.",
      singer: " ",
      path: "/music/s52.mp3",
      image: "/img/img2.jpg"
    },
    {
      name: "I thought he was sick.",
      singer: "",
      path: "/music/s53.mp3",
      image:
        "/img/img2.jpg"
    },
    {
      name: " I'm a little hungry.",
      singer: "",
      path:
        "/music/s54.mp3",
      image: "/img/img2.jpg"
    },
    {
      name: " I have a little money..",
      singer: "",
      path: "/music/s55.mp3",
      image:
        "/img/img2.jpg"
    },
    {
      name: " I haven't seen Tom since 1988.",
      singer: "",
      path: "/music/s56.mp3",
      image:
        "/img/img2.jpg"
    },
    {
      name: " It's been raining since morning.",
      singer: " ",
      path:
        "/music/s57.mp3",
      image:
        "/img/img2.jpg"
    },
    {
      name: " He put the luggage down.",
      singer: " ",
      path: "/music/s58.mp3",
      image:
        "/img/img2.jpg"
    },
    {
      name: " The house is burning.",
      singer: " ",
      path: "/music/s59.mp3",
      image:
        "/img/img2.jpg"
    },
    {
      name: " The house is on fire",
      singer: " ",
      path: "/music/s59-1.mp3",
      image:
        "/img/img2.jpg"
    },
    {
      name: "PRACTICE DAY 6",
      singer: " ",
      path: "/music/d6.mp3",
      image:
        "/img/img2.jpg"
    },
    {
      name: " My camera is different from yours.",
      singer: " ",
      path: "/music/s61.mp3",
      image:
        "/img/img2.jpg"
    },
    {
      name: " We found him alive.",
      singer: " ",
      path: "/music/s62.mp3",
      image: "/img/img2.jpg"
    },
    {
      name: " I was at home.",
      singer: "",
      path: "/music/s63.mp3",
      image:
        "/img/img2.jpg"
    },
    {
      name: " There is no place like home.",
      singer: "",
      path:
        "/music/s64.mp3",
      image: "/img/img2.jpg"
    },
    {
      name: " I live within 200 meters of the station.",
      singer: "",
      path: "/music/s65.mp3",
      image:
        "/img/img2.jpg"
    },
    {
      name: "PRACTICE DAY 7",
      singer: "",
      path: "/music/d7.mp3",
      image:
        "/img/img2.jpg"
    },

    {
      name: " Hi, I saw an advertisement in the newspaper for this coffeemaker.",
      singer: "",
      path:
        "/music/s71.mp3",
      image: "/img/img2.jpg"
    },
    {
      name: " Where can I find it",
      singer: "",
      path: "/music/s72.mp3",
      image:
        "/img/img2.jpg"
    },
    {
      name: "AT THE STORE 1",
      singer: "",
      path: "/music/s73.mp3",
      image:
        "/img/img2.jpg"
    },
    {
      name: "PRACTICE DAY 8",
      singer: " ",
      path:
        "/music/d8.mp3",
      image:
        "/img/img2.jpg"
    },
    {
      name: " I'm sorry, Sir",
      singer: " ",
      path:
        "/music/s81.mp3",
      image:
        "/img/img2.jpg"
    },
    {
      name: " that particular coffeemaker is currently sold out.",
      singer: "",
      path:
        "/music/s82.mp3",
      image: "/img/img2.jpg"
    },
    {
      name: " Would you be interested in a different model",
      singer: "",
      path: "/music/s83.mp3",
      image:
        "/img/img2.jpg"
    },
    {
      name: "AT THE STORE 2",
      singer: "",
      path: "/music/s84.mp3",
      image:
        "/img/img2.jpg"
    },
    {
      name: "PRACTICE DAY 9",
      singer: " ",
      path:
        "/music/d9.mp3",
      image:
        "/img/img2.jpg"
    },
    {
      name: "No,that’s the one I really want",
      singer: "",
      path:
        "/music/s91.mp3",
      image: "/img/img2.jpg"
    },
    {
      name: " Do you know if any of your other stores have it in stock",
      singer: "",
      path: "/music/s92.mp3",
      image:
        "/img/img2.jpg"
    },
    {
      name: "AT THE STORE 3",
      singer: "",
      path: "/music/s93.mp3",
      image:
        "/img/img2.jpg"
    },
    {
      name: "PRACTICE DAY 10",
      singer: " ",
      path:
        "/music/d10.mp3",
      image:
        "/img/img2.jpg"
    },
    {
      name: "There’s another branch of Carter Appliances about twenty minutes from here",
      singer: "",
      path:
        "/music/s101.mp3",
      image: "/img/img2.jpg"
    },
    {
      name: " and our computer says that store has them in stock",
      singer: "",
      path: "/music/s102.mp3",
      image:
        "/img/img2.jpg"
    },
    {
      name: " Why don’t you check there",
      singer: "",
      path: "/music/s103.mp3",
      image:
        "/img/img2.jpg"
    },
    {
      name: "PRACTICE DAY 11",
      singer: " ",
      path:
        "/music/d11.mp3",
      image:
        "/img/img2.jpg"
    },
    {
      name: " I think we should have the promotional material for the hotel updated",
      singer: "",
      path: "/music/s111.mp3",
      image:
        "/img/img2.jpg"
    },
    {
      name: " before the start of the tourist season.",
      singer: " ",
      path:
        "/music/s112.mp3",
      image:
        "/img/img2.jpg"
    },
    {
      name: " I think we should have the promotional material for the hotel updated, before the start of the tourist season..",
      singer: "",
      path:
        "/music/s113.mp3",
      image: "/img/img2.jpg"
    },
    {
      name: " The current materials don’t list our new prices.",
      singer: "",
      path: "/music/s114.mp3",
      image:
        "/img/img2.jpg"
    },
    {
      name: "AT THE MEETING 1",
      singer: "",
      path: "/music/s115.mp3",
      image:
        "/img/img2.jpg"
    },
    {
      name: "PRACTICE DAY 12",
      singer: " ",
      path:
        "/music/d12.mp3",
      image:
        "/img/img2.jpg"
    },
    {
      name: " I agree",
      singer: "",
      path: "/music/s121.mp3",
      image:
        "/img/img2.jpg"
    },
    {
      name: " and, you know, the brochure needs to be redone, as well",
      singer: " ",
      path:
        "/music/s122.mp3",
      image:
        "/img/img2.jpg"
    },
    {
      name: " I agree and, you know, the brochure needs to be redone, as well ",
      singer: "",
      path:
        "/music/s123.mp3",
      image: "/img/img2.jpg"
    },
    {
      name: " It really should include new photos of the renovated rooms.",
      singer: "",
      path: "/music/s124.mp3",
      image:
        "/img/img2.jpg"
    },
    {
      name: "AT THE MEETING 2",
      singer: "",
      path: "/music/s125.mp3",
      image:
        "/img/img2.jpg"
    },
    {
      name: "PRACTICE DAY 13",
      singer: " ",
      path:
        "/music/d13.mp3",
      image:
        "/img/img2.jpg"
    },
    {
      name: "  But do you think our budget can cover the additional expense",
      singer: "",
      path: "/music/s131.mp3",
      image:
        "/img/img2.jpg"
    },
    {
      name: " Printing a new brochure will be expensive.",
      singer: " ",
      path:
        "/music/s132.mp3",
      image:
        "/img/img2.jpg"
    },
    {
      name: "But do you think our budget can cover the additional expense.  Printing a new brochure will be expensive ",
      singer: "",
      path:
        "/music/s133.mp3",
      image: "/img/img2.jpg"
    },
    {
      name: "Yes, but it’ll help with our advertising",
      singer: "",
      path: "/music/s134.mp3",
      image:
        "/img/img2.jpg"
    },
    {
      name: " that should get us more bookings.",
      singer: "",
      path: "/music/s135.mp3",
      image:
        "/img/img2.jpg"
    },
    {
      name: "Yes, but it'll help with our advertising, and that should get us more booking",
      singer: " ",
      path:
        "/music/s136.mp3",
      image:
        "/img/img2.jpg"
    },
    {
      name: "AT THE MEETING 4",
      singer: "",
      path: "/music/s137.mp3",
      image:
        "/img/img2.jpg"
    },
    {
      name: "PRACTICE DAY 14",
      singer: " ",
      path:
        "/music/d14.mp3",
      image:
        "/img/img2.jpg"
    },

	
  ],
  setConfig: function (key, value) {
    this.config[key] = value;
    // (2/2) Uncomment the line below to use localStorage
    // localStorage.setItem(PlAYER_STORAGE_KEY, JSON.stringify(this.config));
  },
  render: function () {
    const htmls = this.songs.map((song, index) => {
      return `
                        <div class="song ${
                          index === this.currentIndex ? "active" : ""
                        }" data-index="${index}">
                            <div class="thumb"
                                style="background-image: url('${song.image}')">
                            </div>
                            <div class="body">
                                <h3 class="title">${song.name}</h3>
                                <p class="author">${song.singer}</p>
                            </div>
                            <div class="option">
                                <i class="fas fa-ellipsis-h"></i>
                            </div>
                        </div>
                    `;
    });
    playlist.innerHTML = htmls.join("");
  },
  defineProperties: function () {
    Object.defineProperty(this, "currentSong", {
      get: function () {
        return this.songs[this.currentIndex];
      }
    });
  },
  handleEvents: function () {
    const _this = this;
    const cdWidth = cd.offsetWidth;

    // Xử lý CD quay / dừng
    // Handle CD spins / stops
    const cdThumbAnimate = cdThumb.animate([{ transform: "rotate(360deg)" }], {
      duration: 10000, // 10 seconds
      iterations: Infinity
    });
    cdThumbAnimate.pause();

    // Xử lý phóng to / thu nhỏ CD
    // Handles CD enlargement / reduction
    document.onscroll = function () {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      const newCdWidth = cdWidth - scrollTop;

      cd.style.width = newCdWidth > 0 ? newCdWidth + "px" : 0;
      cd.style.opacity = newCdWidth / cdWidth;
    };

    // Xử lý khi click play
    // Handle when click play
    playBtn.onclick = function () {
      if (_this.isPlaying) {
        audio.pause();
      } else {
        audio.play();
      }
    };

    // Khi song được play
    // When the song is played
    audio.onplay = function () {
      _this.isPlaying = true;
      player.classList.add("playing");
      cdThumbAnimate.play();
    };

    // Khi song bị pause
    // When the song is pause
    audio.onpause = function () {
      _this.isPlaying = false;
      player.classList.remove("playing");
      cdThumbAnimate.pause();
    };

    // Khi tiến độ bài hát thay đổi
    // When the song progress changes
    audio.ontimeupdate = function () {
      if (audio.duration) {
        const progressPercent = Math.floor(
          (audio.currentTime / audio.duration) * 100
        );
        progress.value = progressPercent;
      }
    };

    // Xử lý khi tua song
    // Handling when seek
    progress.onchange = function (e) {
      const seekTime = (audio.duration / 100) * e.target.value;
      audio.currentTime = seekTime;
    };

    // Khi next song
    // When next song
    nextBtn.onclick = function () {
      if (_this.isRandom) {
        _this.playRandomSong();
      } else {
        _this.nextSong();
      }
      audio.play();
      _this.render();
      _this.scrollToActiveSong();
    };

    // Khi prev song
    // When prev song
    prevBtn.onclick = function () {
      if (_this.isRandom) {
        _this.playRandomSong();
      } else {
        _this.prevSong();
      }
      audio.play();
      _this.render();
      _this.scrollToActiveSong();
    };

    // Xử lý bật / tắt random song
    // Handling on / off random song
    randomBtn.onclick = function (e) {
      _this.isRandom = !_this.isRandom;
      _this.setConfig("isRandom", _this.isRandom);
      randomBtn.classList.toggle("active", _this.isRandom);
    };

    // Xử lý lặp lại một song
    // Single-parallel repeat processing
    repeatBtn.onclick = function (e) {
      _this.isRepeat = !_this.isRepeat;
      _this.setConfig("isRepeat", _this.isRepeat);
      repeatBtn.classList.toggle("active", _this.isRepeat);
    };

    // Xử lý next song khi audio ended
    // Handle next song when audio ended
    audio.onended = function () {
      if (_this.isRepeat) {
        audio.play();
      } else {
        nextBtn.click();
      }
    };

    // Lắng nghe hành vi click vào playlist
    // Listen to playlist clicks
    playlist.onclick = function (e) {
      const songNode = e.target.closest(".song:not(.active)");

      if (songNode || e.target.closest(".option")) {
        // Xử lý khi click vào song
        // Handle when clicking on the song
        if (songNode) {
          _this.currentIndex = Number(songNode.dataset.index);
          _this.loadCurrentSong();
          _this.render();
          audio.play();
        }

        // Xử lý khi click vào song option
        // Handle when clicking on the song option
        if (e.target.closest(".option")) {
        }
      }
    };
  },
  scrollToActiveSong: function () {
    setTimeout(() => {
      $(".song.active").scrollIntoView({
        behavior: "smooth",
        block: "nearest"
      });
    }, 300);
  },
  loadCurrentSong: function () {
    heading.textContent = this.currentSong.name;
    cdThumb.style.backgroundImage = `url('${this.currentSong.image}')`;
    audio.src = this.currentSong.path;
  },
  loadConfig: function () {
    this.isRandom = this.config.isRandom;
    this.isRepeat = this.config.isRepeat;
  },
  nextSong: function () {
    this.currentIndex++;
    if (this.currentIndex >= this.songs.length) {
      this.currentIndex = 0;
    }
    this.loadCurrentSong();
  },
  prevSong: function () {
    this.currentIndex--;
    if (this.currentIndex < 0) {
      this.currentIndex = this.songs.length - 1;
    }
    this.loadCurrentSong();
  },
  playRandomSong: function () {
    let newIndex;
    do {
      newIndex = Math.floor(Math.random() * this.songs.length);
    } while (newIndex === this.currentIndex);

    this.currentIndex = newIndex;
    this.loadCurrentSong();
  },
  start: function () {
    // Gán cấu hình từ config vào ứng dụng
    // Assign configuration from config to application
    this.loadConfig();

    // Định nghĩa các thuộc tính cho object
    // Defines properties for the object
    this.defineProperties();

    // Lắng nghe / xử lý các sự kiện (DOM events)
    // Listening / handling events (DOM events)
    this.handleEvents();

    // Tải thông tin bài hát đầu tiên vào UI khi chạy ứng dụng
    // Load the first song information into the UI when running the app
    this.loadCurrentSong();

    // Render playlist
    this.render();

    // Hiển thị trạng thái ban đầu của button repeat & random
    // Display the initial state of the repeat & random button
    randomBtn.classList.toggle("active", this.isRandom);
    repeatBtn.classList.toggle("active", this.isRepeat);
  }
};

app.start();
