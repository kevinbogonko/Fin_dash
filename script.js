// DOM FOR SIDEBAR MENU FULL SCREEN
const sidebarMenu = document.getElementById('sidebar-menu');
const hamburger = document.querySelector('.hamburger');

// DOM FOR MOBILE MENU
const mobileHamburger = document.querySelector('.hamburger-mobile');
const mobileMenu = document.querySelector('.mobile-sidebar-menu');

// DOM FOR SUBLIST MENU
const studentTag = document.getElementById('student-tag');
const subListStudent = document.getElementById('sub-list-student');

const studentMobileTag = document.getElementById('mobile-student-tag');
const subListMobileStudent = document.getElementById('mobile-sub-list-student');

const teacherTag = document.getElementById('teacher-tag');
const subListTeacher = document.getElementById('sub-list-teacher');

const teacherMobileTag = document.getElementById('mobile-teacher-tag');
const subListMobileTeacher = document.getElementById('mobile-sub-list-teacher');

const examTag = document.getElementById('exam-tag');
const subListExam = document.getElementById('sub-list-exam');

const examMobileTag = document.getElementById('mobile-exam-tag');
const subListMobileExam = document.getElementById('mobile-sub-list-exam');

const reportTag = document.getElementById('report-tag');
const subListReport = document.getElementById('sub-list-report');

const reportMobileTag = document.getElementById('mobile-report-tag');
const subListMobileReport = document.getElementById('mobile-sub-list-report');

const informationTag = document.getElementById('information-tag');
const subListInformation = document.getElementById('sub-list-information');

const informationMobileTag = document.getElementById('mobile-information-tag');
const subListMobileInformation = document.getElementById('mobile-sub-list-information');

// DOM FOR USER PROFILE
const user = document.getElementById('user-icon');
const userDropdownMenu = document.querySelector('.user-dropdown-menu');

// FUNCTION FOR TOGGLING MOBILE MENU
function toggleMobileMenu() {
    mobileMenu.classList.toggle("showMenu");
}
  
function toggleMenu() {

    sidebarMenu.classList.toggle("close");

    Array.from(sidebarMenu.getElementsByClassName('open')).forEach(ul => {
        ul.classList.remove('open');
    });

    Array.from(sidebarMenu.getElementsByClassName('rotate')).forEach(ul => {
        ul.classList.remove('rotate');
    });

}

function toggleSideStudentMenuOptions(){

    subListStudent.classList.toggle('open');
    studentTag.childNodes[0].classList.toggle('rotate');

    if(sidebarMenu.classList.contains('close')){
        sidebarMenu.classList.toggle('close');
    }

}

function toggleSideMobileStudentMenuOptions(){
    subListMobileStudent.classList.toggle('open');
    studentMobileTag.childNodes[0].classList.toggle('rotate');
}

function toggleSideTeacherMenuOptions(){

    subListTeacher.classList.toggle('open');
    teacherTag.childNodes[0].classList.toggle('rotate');

    if(sidebarMenu.classList.contains('close')){
        sidebarMenu.classList.toggle('close');
    }

}

function toggleSideMobileTeacherMenuOptions(){
    subListMobileTeacher.classList.toggle('open');
    teacherMobileTag.childNodes[0].classList.toggle('rotate');


}

function toggleSideExamMenuOptions(){
    subListExam.classList.toggle('open');
    examTag.childNodes[0].classList.toggle('rotate');

    if(sidebarMenu.classList.contains('close')){
        sidebarMenu.classList.toggle('close');
    }

}

function toggleSideMobileExamMenuOptions(){
    subListMobileExam.classList.toggle('open');
    examMobileTag.childNodes[0].classList.toggle('rotate');


}

function toggleSideInformationMenuOptions(){
    subListInformation.classList.toggle('open');
    informationTag.childNodes[0].classList.toggle('rotate');

    if(sidebarMenu.classList.contains('close')){
        sidebarMenu.classList.toggle('close');
    }

}

function toggleSideMobileInformationMenuOptions(){
    subListMobileInformation.classList.toggle('open');
    informationMobileTag.childNodes[0].classList.toggle('rotate');
}

function toggleSideReportMenuOptions(){
    subListReport.classList.toggle('open');
    reportTag.childNodes[0].classList.toggle('rotate');

    if(sidebarMenu.classList.contains('close')){
        sidebarMenu.classList.toggle('close');
    }
}

function toggleSideMobileReportMenuOptions(){
    subListMobileReport.classList.toggle('open');
    reportMobileTag.childNodes[0].classList.toggle('rotate');
}

function toggleUserInfo(){
    userDropdownMenu.classList.toggle('open')
}


// Dark-mode

const toggleDarkButton = document.getElementById('dark_btn');
const navBar = document.getElementById('navbar');
const menuItems = document.querySelectorAll('ul li a .menu-item');
const menuTexts = document.querySelectorAll('.menu-item .item h4');
const menuIcons = document.querySelectorAll('.menu-item .icon i');
const menuLinkIcons = document.querySelectorAll('.menu-item .item i');
const subItems = document.querySelectorAll('.sub-list a .sub-item');
const sideBarLists = document.querySelectorAll('.sidebar-menu-list ul li');
const mobileSideBarLists = document.querySelectorAll('.mobile-sidebar-menu ul li');
const userDropdownMenuActions = document.querySelectorAll('.user-dropdown-menu .user-dropdown-menu-action');

const navTitle = document.querySelector('.nav-cont h3');

const analyticsTitle = document.querySelector('.analytics-title');
const overviewCards = document.querySelectorAll('.overview .card');
const dataGraphs = document.querySelectorAll('.user-data-graph');

const highlights = document.querySelector('.highlights');
const highlightsTableHeads = document.querySelectorAll('.highlights table thead tr td');
const highlightsTableBodys = document.querySelectorAll('.highlights table tbody tr td');

const footer = document.querySelector('footer');
const footerIcons = document.querySelectorAll(' footer .social-media-apps i');


const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)').matches;

// Set initial theme based on system preference or saved preference
document.body.classList.toggle('dark', prefersDarkScheme || localStorage.getItem('dark-mode') === 'enabled');
navBar.classList.toggle('dark', prefersDarkScheme || localStorage.getItem('dark-mode') === 'enabled');
sidebarMenu.classList.toggle('dark', prefersDarkScheme || localStorage.getItem('dark-mode') === 'enabled');
mobileMenu.classList.toggle('dark', prefersDarkScheme || localStorage.getItem('dark-mode') === 'enabled');

sideBarLists.forEach((sideBarList) => {
    sideBarList.classList.toggle('dark', prefersDarkScheme || localStorage.getItem('dark-mode') === 'enabled');
})

mobileSideBarLists.forEach((mobileSideBarList) => {
    mobileSideBarList.classList.toggle('dark', prefersDarkScheme || localStorage.getItem('dark-mode') === 'enabled');
})
menuItems.forEach((menuItem) => {
    menuItem.classList.toggle('dark', prefersDarkScheme || localStorage.getItem('dark-mode') === 'enabled');
})

menuTexts.forEach((menuText) => {
    menuText.classList.toggle('dark', prefersDarkScheme || localStorage.getItem('dark-mode') === 'enabled');
})
menuIcons.forEach((menuIcon) => {
    menuIcon.classList.toggle('dark', prefersDarkScheme || localStorage.getItem('dark-mode') === 'enabled');
})
menuLinkIcons.forEach((menuLinkIcon) => {
    menuLinkIcon.classList.toggle('dark', prefersDarkScheme || localStorage.getItem('dark-mode') === 'enabled');
})
subItems.forEach((subItem) => {
    subItem.classList.toggle('dark', prefersDarkScheme || localStorage.getItem('dark-mode') === 'enabled');
})


userDropdownMenuActions.forEach((userDropdownMenuAction) => {
    userDropdownMenuAction.classList.toggle('dark', prefersDarkScheme || localStorage.getItem('dark-mode') === 'enabled');
})

overviewCards.forEach((overviewCard) => {
    overviewCard.classList.toggle('dark', prefersDarkScheme || localStorage.getItem('dark-mode') === 'enabled');
})
dataGraphs.forEach((dataGraph) => {
    dataGraph.classList.toggle('dark', prefersDarkScheme || localStorage.getItem('dark-mode') === 'enabled');
})
highlightsTableHeads.forEach((highlightsTableHead) => {
    highlightsTableHead.classList.toggle('dark', prefersDarkScheme || localStorage.getItem('dark-mode') === 'enabled');
})
highlightsTableBodys.forEach((highlightsTableBody) => {
    highlightsTableBody.classList.toggle('dark', prefersDarkScheme || localStorage.getItem('dark-mode') === 'enabled');
})
footerIcons.forEach((footerIcon) => {
    footerIcon.classList.toggle('dark', prefersDarkScheme || localStorage.getItem('dark-mode') === 'enabled');
})

navTitle.classList.toggle('dark', prefersDarkScheme || localStorage.getItem('dark-mode') === 'enabled');
userDropdownMenu.classList.toggle('dark', prefersDarkScheme || localStorage.getItem('dark-mode') === 'enabled');

analyticsTitle.classList.toggle('dark', prefersDarkScheme || localStorage.getItem('dark-mode') === 'enabled');
highlights.classList.toggle('dark', prefersDarkScheme || localStorage.getItem('dark-mode') === 'enabled');

footer.classList.toggle('dark', prefersDarkScheme || localStorage.getItem('dark-mode') === 'enabled');

toggleDarkButton.addEventListener('click', () => {

    navBar.classList.toggle('dark');
    sidebarMenu.classList.toggle('dark');
    mobileMenu.classList.toggle('dark');

    sideBarLists.forEach((sideBarList) => {
        sideBarList.classList.toggle('dark');
    })

    mobileSideBarLists.forEach((mobileSideBarList) => {
        mobileSideBarList.classList.toggle('dark');
    })

    menuItems.forEach((menuItem) => {
        menuItem.classList.toggle('dark');
    })

    menuTexts.forEach((menuText) => {
        menuText.classList.toggle('dark');
    })

    menuIcons.forEach((menuIcon) => {
        menuIcon.classList.toggle('dark');
    })

    menuLinkIcons.forEach((menuLinkIcon) => {
        menuLinkIcon.classList.toggle('dark');
    })

    subItems.forEach((subItem) => {
        subItem.classList.toggle('dark');
    })


    userDropdownMenuActions.forEach((userDropdownMenuAction) => {
        userDropdownMenuAction.classList.toggle('dark');
    })

    overviewCards.forEach((overviewCard) => {
        overviewCard.classList.toggle('dark');
    })

    dataGraphs.forEach((dataGraph) => {
        dataGraph.classList.toggle('dark');
    })

    highlightsTableHeads.forEach((highlightsTableHead) => {
        highlightsTableHead.classList.toggle('dark');
    })

    highlightsTableBodys.forEach((highlightsTableBody) => {
        highlightsTableBody.classList.toggle('dark');
    })

    footerIcons.forEach((footerIcon) => {
        footerIcon.classList.toggle('dark');
    })

    navTitle.classList.toggle('dark');
    userDropdownMenu.classList.toggle('dark');
    
    analyticsTitle.classList.toggle('dark');
    highlights.classList.toggle('dark');

    footer.classList.toggle('dark');


    const isDarkMode = document.body.classList.toggle('dark');

    localStorage.setItem('dark', isDarkMode ? 'enabled' : 'disabled');
});


mobileHamburger.addEventListener("click", toggleMobileMenu);
hamburger.addEventListener('click', toggleMenu);
studentTag.addEventListener('click', toggleSideStudentMenuOptions);
studentMobileTag.addEventListener('click', toggleSideMobileStudentMenuOptions);
teacherTag.addEventListener('click', toggleSideTeacherMenuOptions);
teacherMobileTag.addEventListener('click', toggleSideMobileTeacherMenuOptions);
examTag.addEventListener('click', toggleSideExamMenuOptions);
examMobileTag.addEventListener('click', toggleSideMobileExamMenuOptions);
informationTag.addEventListener('click', toggleSideInformationMenuOptions);
informationMobileTag.addEventListener('click', toggleSideMobileInformationMenuOptions);
reportTag.addEventListener('click', toggleSideReportMenuOptions);
reportMobileTag.addEventListener('click', toggleSideMobileReportMenuOptions);
user.addEventListener('click', toggleUserInfo);


