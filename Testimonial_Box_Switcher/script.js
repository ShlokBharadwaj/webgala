const testimonialContainer = document.querySelector('.testimonial-container');
const testimonial = document.querySelector('.testimonial');
const userImage = document.querySelector('.user-image');
const username = document.querySelector('.username');
const role = document.querySelector('.role');

const testimonials = [
    {
        name: 'Jonathan Walters',
        position: 'Framer',
        photo: 'https://source.unsplash.com/random/?portrait,india',
        text: ' Thank you for the wonderful experience! I now have a job I really enjoy, and make a good living while doing something I love. ',
    },
    {
        name: 'Miyah Myles',
        position: 'Marketing',
        photo: 'https://source.unsplash.com/random/?portrait,women',
        text: ' I\'ve been interested in coding for a while but never taken the jump, until now. I couldn\'t recommend this course enough. I\'m now in the job of my dreams and so excited about the future. ',
    },
    {
        name: 'June Cha',
        position: 'Software Engineer',
        photo: 'https://source.unsplash.com/random/?portrait,men',
        text: ' If you want to lay the best foundation possible I\'d recommend taking this course. The depth the instructors go into is incredible. I now feel so confident about starting up as a professional developer. ',
    },
    {
        name: 'Iida Niskanen',
        position: 'Data Entry',
        photo: 'https://source.unsplash.com/random/?portrait,women,men',
        text: ' I was an EMT for many years before I joined the bootcamp. I\'ve been looking to make a transition and have heard some people who had an amazing experience here. I signed up for the free intro course and found it incredibly fun! I enrolled shortly thereafter. The next 12 weeks was the best - and most grueling - time of my life. Since completing the course, I\'ve successfully switched careers, working as a Software Engineer at a VR startup. ',
    },
    {
        name: 'Renee Sims',
        position: 'Receptionist',
        photo: 'https://source.unsplash.com/random/?portrait,men,women,people',
        text: ' I\'m a receptionist at a law firm and was looking for resources to better my knowledge of the field. This was a fantastic course that gave me everything I needed to know in a comprehensive and digestible way. ',
    },
    {
        name: 'Sasha Ho',
        position: 'Architect',
        photo: 'https://source.unsplash.com/random/?portrait,men,indian',
        text: ' Before joining the bootcamp, I\'ve never written a line of code. I needed some structure from professionals who can help me learn programming step by step. I was encouraged to enroll by a former student of theirs who can only say wonderful things about the program. The entire curriculum and staff did not disappoint. They were very hands-on and I never had to wait long for assistance. The agile team project, in particular, was outstanding. It took my learning to the next level in a way that no tutorial could ever have. In fact, I\'ve often referred to it during interviews as an example of my developent experience. It certainly helped me land a job as a full-stack developer after receiving multiple offers. 100% recommend! ',
    },
    {
        name: 'Veeti Seppanen',
        position: 'Director',
        photo: 'https://source.unsplash.com/random/?portrait,women,indian',
        text: ' The team was very supportive and kept me motivated. I learned a lot in a short period of time, and I now feel so confident about starting up as a professional developer. ',
    },
];


let idx = 1;

function updateTestimonial() {
    const { name, position, photo, text } = testimonials[idx];

    testimonial.innerHTML = text;
    userImage.src = photo;
    username.innerHTML = name;
    role.innerHTML = position;

    idx++;

    if (idx > testimonials.length - 1) {
        idx = 0;
    }
}

setInterval(updateTestimonial, 7000);
