var model = {
    profile: {
        avatar: "picture/avata.png",
        lastname: "Hoang",
        firstName: "Thao Van",
        fullName: "HOANG THAO VAN",
        position: "FONT END DEVELOPER",
        infor: {
            birthDate: "Dec 2nd 1994",
            phoneNumber: "080-6272-5352",
            email: "vanht.itgmail.com",
            address: "Rom 3-34-8-293 Itabashi, Itabashi-ku, Tokyo"
        },
        socials: [{
                icon: "skype.png",
                name: "Skype",
                link: "https:www.google.com"
            },
            {
                icon: "",
                name: "Line",
                link: ""
            },
            {
                icon: "",
                name: "Facebook",
                link: ""
            },
            {
                icon: "",
                name: "Instagram",
                link: ""
            }
        ]
    },
    experience: [
        {},
        {}
    ],
    education: [{
            time: "9/2012 - 6/2016",
            degree: "Bachelor`s Degree",
            specialized: "Computer science",
            school: "Vinh University",
            nation: "Philippines"
        },
        {
            time: "8/2016 - 11/2016",
            degree: "Ielts",
            specialized: "Computer science",
            school: "tại trường Cao đẳng nghề TP.HCM",
            nation: "Philippines"
        }
    ],
    skill: [{
            icon: "",
            name: "HTML4",
            evaludate: "progress-25-persent"
        },
        {
            icon: "",
            name: "React",
            evaludate: "progress-50-persent"
        }
    ],
    language: [{
            icon: "",
            name: "Vietnames",
            achievements: ""
        },
        {
            icon: "",
            name: "English",
            achievements: ""
        },
        {
            icon: "",
            name: "Japanese",
            achievements: "[N2]"
        }
    ]
}


// var model_v2 = {
//     profile:{
//         avatar: "avata.png",
//         fulname: "Hoan thao van"
//     }
//     experience: {}
//     education: {}
// }

// function loadProfileOfmodelv2(){
//     var avartar = model_v2.profile.avatar // variable is avatar
// }

function getElementById(id) {
    return document.getElementById(id);
}

var folderAvatar = "picture"
var folderAvatar_v2 = "picture"
var folderIcon = "picture/icons";



function loadSocial() {
    var contentSocial //= "" //empty //null
        //var social = model.profile.socials
    model.profile.socials.forEach(e => {
        contentSocial += `    
        <p class="p1">
            <a href="${e.link}" target="_blank">
                <span class="span1"><img src="${folderIcon}/${e.icon}"></span> <br>
                <span id="social-name">${e.name}</span>
            </a>
        </p>`
    })
    return contentSocial;
}

function loadExperience() {

}

function loadeducation() {

}

function loadDataCV() {
    loadProfileCV();
    getElementById("social").innerHTML = loadSocial();
}

function loadProfileCV() {
    var profile = model.profile;
    alert(profile)
    getElementById("fullname").innerHTML = `${profile.firstName}<br><span>${profile.lastname}</span>`;
    getElementById("position").innerHTML = profile.position;
    getElementById("avatar").innerHTML = `${folderAvatar_v2}/${profile.avatar}`
}

loadDataCV()