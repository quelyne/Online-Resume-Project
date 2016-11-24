//Biography & Contacts//
var bio = {
    "name": "Jackie Savard",
    "role": "Web Developer",
    "contacts": {
        "mobile": "123-456-7890",
        "email": "jacquelyne.savard@gmail.com",
        "github": "quelyne",
        "location": "South Haven, MI"
    },
    "welcomeMessage": "'Continuous effort - not strength or intelligence - is the key to unlocking our potential.'- Winston Churchill",
    "skills": ["Adobe Creative Cloud", "Communication", "Reporting", "Flexibility", "Programming"],
    "biopic": "images/savard.jpg"
};

//Education Background//
var education = {
    "schools": [{
        "name": "Michigan State University",
        "location": "East Lansing, MI",
        "degree": "Bachelor of Arts",
        "majors": "Advertising",
        "dates": "2005-2009",
        "url": "http://www.msu.edu"
    }],
    "onlineCourses": [{
        "title": "Intro to Programming - Nanodegree",
        "school": "Udacity",
        "dates": "2016",
        "url": "http://www.udacity.com"
    }]
};

//Work Experience//
var work = {
    "jobs": [{
        "employer": "Burnham & Flower",
        "title": "Benefits Analyst",
        "dates": "May 2016 - Current",
        "description": "Develop insurance proposals for clients; analyzing & comparing quotes from multiple insurance providers. Produce documents to inform clients’ employees of due dates, changes to benefits, & accessing additional resources. Update & created client resource websites with new plan/policy information. Implemented a new process to improve the creation & tracking of insurance proposals. Developed a report to track the progress of proposals throughout the renewal process. Created training materials & work instructions for development of insurance proposals & production of informational documents to aid future Benefits Analysts.",
        "location": "Kalamazoo, MI"
    }, {
        "employer": "JP Morgan Chase",
        "title": "Communications Analyst",
        "dates": "May 2012 - May 2016",
        "description": "Develop, manage, & maintain distribution lists for a variety of corporate communications. Compile custom distribution lists for communications going to over 100,000 employees. Tracked organizational changes to ensure accurate delivery of communications. Developed logos, graphics, & layouts for internal communications. Created Excel-based reports to analyze correlations between viewership & multiple variables; e.g. article content, channel of delivery, & timing. Resulted in eliminating articles with low viewership & increasing viewership of essential communications. Surveyed the audiences to gather feedback & insights on improving communication. Created Excel-based reports to analyze conference call information & identify methods to improve participation.",
        "location": "Columbus, OH"
    }, {
        "employer": "JP Morgan Chase",
        "title": "Client Service Professional",
        "dates": "April 2011 - May 2012",
        "description": "ssist high net worth clients with credit charge disputes, reporting fraud, & troubleshooting account problems or questions. Aided customers traveling abroad who were in need of financial assistance, i.e. lost or stolen credit cards. Created reference & training material to aid in navigating & operating internal customer assistance applications.",
        "location": "Columbus, OH"
    }]
};

//Projects//
var projects = {
    "projects": [{
        "title": "Made a Web Page",
        "dates": "2016",
        "description": "Created a static web page using HTML & CSS",
        "url": ""
    }, {
        "title": "Fill-in-the-Blanks Quiz",
        "dates": "2016",
        "description": "Created a fill-in-the-blanks quiz using Python",
        "url": ""
    }, {
        "title": "Made a Movie Web Page",
        "dates": "2016",
        "description": "Created a web page using Python allowing visitors to view my favorite movies and their trailers",
        "url": ""
    }]
};

//bio JS//
bio.display = function() {

    var formattedName = HTMLheaderName.replace("%data%", bio.name);
    var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
    var formattedBioPic = HTMLbioPic.replace("%data%", bio.biopic);


    var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
    var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
    var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
    var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
    var formattedWelcomeMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);


    $("#header").prepend(formattedRole);
    $("#header").prepend(formattedName);
    $('#header').append(formattedBioPic);
    $('#topContacts').append(formattedMobile);
    $('#footerContacts').append(formattedMobile);
    $('#topContacts').append(formattedEmail);
    $('#footerContacts').append(formattedEmail);
    $('#topContacts').append(formattedGithub);
    $('#footerContacts').append(formattedGithub);
    $('#header').append(formattedWelcomeMsg);

    $("#header").append(HTMLskillsStart);
    bio.skills.forEach(function(skills) {

        var formattedSkill = HTMLskills.replace("%data%", skills);
        $("#skills").append(formattedSkill);
    });
};




//Work Experience//
work.display = function() {
    work.jobs.forEach(function(job) {
        $("#workExperience").append(HTMLworkStart);

        var formattedWorkEmployer = HTMLworkEmployer.replace("%data%", job.employer);

        var formattedWorkTitle = HTMLworkTitle.replace("%data%", job.title);

        var formattedWorkEmployerTitle = formattedWorkEmployer + formattedWorkTitle;
        $(".work-entry:last").append(formattedWorkEmployerTitle);

        var formattedWorkDates = HTMLworkDates.replace("%data%", job.dates);
        $(".work-entry:last").append(formattedWorkDates);
        
        var formattedworkLocation = HTMLworkLocation.replace("%data%", job.location);
        $(".work-entry:last").append(formattedworkLocation);
        
        var formattedWorkDescription = HTMLworkDescription.replace("%data%", job.description);
        $(".work-entry:last").append(formattedWorkDescription);
    });
};

// Project JS//
projects.display = function() {
    projects.projects.forEach(function(projects) {
        $("#projects").append(HTMLprojectStart);
        var formattedprojectTitle = HTMLprojectTitle.replace("%data%", projects.title);
        $(".project-entry:last").append(formattedprojectTitle);
        var formattedprojectDates = HTMLprojectDates.replace("%data%", projects.dates);
        $(".project-entry:last").append(formattedprojectDates);
        var formattedprojectDescription = HTMLprojectDescription.replace("%data%", projects.description);
        $(".project-entry:last").append(formattedprojectDescription);
    });
};

//Education JS//
education.display = function() {
    education.schools.forEach(function(school) {
        $("#education").append(HTMLschoolStart);

        var formattedName = HTMLschoolName.replace("%data%", school.name);
        $(".education-entry:last").append(formattedName);

        var formattedDegree = HTMLschoolDegree.replace("%data%", school.degree);
        $(".education-entry:last").append(formattedDegree);

        var formattedDates = HTMLschoolDates.replace("%data%", school.dates);
        $(".education-entry:last").append(formattedDates);

        var formattedLocation = HTMLschoolLocation.replace("%data%", school.location);
        $(".education-entry:last").append(formattedLocation);

        var formattedMajor = HTMLschoolMajor.replace("%data%", school.majors);
        $(".education-entry:last").append(formattedMajor);
        
        var formattedURL = HTMLonlineURL.replace("%data%", school.url);
        $(".education-entry:last").append(formattedURL);
    });

    $("#education").append(HTMLonlineClasses);

    education.onlineCourses.forEach(function(onlineCourse) {

        $("#education").append(HTMLschoolStart);

        var formattedTitle = HTMLonlineTitle.replace("%data%", onlineCourse.title);
        $(".education-entry:last").append(formattedTitle);

        var formattedSchool = HTMLonlineSchool.replace("%data%", onlineCourse.school);
        $(".education-entry:last").append(formattedSchool);

        var formattedDates = HTMLonlineDates.replace("%data%", onlineCourse.dates);
        $(".education-entry:last").append(formattedDates);

        var formattedURL = HTMLonlineURL.replace("%data%", onlineCourse.url);
        $(".education-entry:last").append(formattedURL);
    });
};


bio.display();
education.display();
work.display();
projects.display();

$("#mapDiv").append(googleMap);
