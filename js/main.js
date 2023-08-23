import './slider';
import modals from './modules/modals';
import tabs from './modules/tabs';
import forms from './modules/forms';
import changeModalState from './modules/changeModalState';
import timer from './modules/timer';
import images from './modules/images';

window.addEventListener('DOMContentLoaded', () => {

    let modalState ={};
    // const fakeDeadline = new Date(new Date().setDate(new Date().getDate() + 10));
    const fakeDeadline = new Date(new Date().getTime() + (10 * 24 * 60 * 60 * 1000) + (9 * 60 * 60 * 1000) + (17 * 60 * 1000));

    changeModalState(modalState);
    images();
    timer('.timer1', fakeDeadline)
    modals();
    tabs('.glazing_slider', '.glazing_block', '.glazing_content', 'active');
    tabs('.decoration_slider', '.no_click', '.decoration_content > div > div', 'after_click');
    tabs('.balcon_icons','.balcon_icons_img', '.big_img > img', 'do_image_more', 'inline-block');
    forms(modalState);
})

console.log(1);