import IdIcone from './idIcone.vue';
import CalendarCheck from './svglib/calendar-check.vue';
import Calendar from './svglib/calendar.vue';
import Envelope from './svglib/envelope.vue';
import Heart from './svglib/heart.vue';
import HelpRounded from './svglib/help-rounded.vue';
import HourFull from './svglib/hour-full.vue';
import LoginRounded from './svglib/login-rounded.vue';
import LogoutRounded from './svglib/logout-rounded.vue';
import Telephone from './svglib/telephone.vue';
import UserFull from './svglib/user-full.vue';
import UserPlus from './svglib/user-plus.vue';
import User from './svglib/user.vue';

export const InnovDevIcon =  {
    install(App){
        const app = App;
        app.component('id-icon',IdIcone)
    app.component('user-plus', UserPlus);
    app.component('logout-rounded', LogoutRounded);
    app.component('InnovDevIcon', InnovDevIcon);
    app.component('login-rounded', LoginRounded);
    app.component('help-rounded', HelpRounded);
    app.component('heart',Heart)
    app.component('calendar',Calendar);
    app.component('envelope',Envelope);
    app.component('user', User);
    app.component('user-full', UserFull);
    app.component('calendar-checked', CalendarCheck)
    app.component('telephone',Telephone)
    app.component('clock',HourFull)
    //app.component('')
    }
    
};

