import Calendar from './svglib/calendar.vue';
import Envelope from './svglib/envelope.vue';
import Heart from './svglib/heart.vue';
import HelpRounded from './svglib/help-rounded.vue';
import LoginRounded from './svglib/login-rounded.vue';
import LogoutRounded from './svglib/logout-rounded.vue';
import UserPlus from './svglib/user-plus.vue';
import User from './svglib/user.vue';

export const InnovDevIcon =  {
    install(App){
        const app = App;
    app.component('user-plus', UserPlus);
    app.component('logout-rounded', LogoutRounded);
    app.component('InnovDevIcon', InnovDevIcon);
    app.component('login-rounded', LoginRounded);
    app.component('help-rounded', HelpRounded);
    app.component('heart',Heart)
    app.component('calendar',Calendar);
    app.component('envelope',Envelope);
    app.component('user', User);
    }
    
};

