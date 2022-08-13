import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from '@reduxjs/toolkit'; 
import { BlogState } from '../../types';

const LOCAL_STORAGE_KEY = "react-todo-list-todos";

const initialState:BlogState[] = [{
    id: '0',
    title: 'Concessions of a Vegetarian Cook',
    author: 'Jenny Resenstrach',
    image: 'https://www.exploreinsiders.com/wp-content/uploads/2020/01/seo-food-bloggers.jpg',
    category: 'Food',
    content: 'I’ve been pretty good about sticking to the Weekday Vegetarian plan ever since issuing the official decree in our house back in October. What’s been surprising is that the girls have been great too, even though I have all sorts of plans in place (including a bag of drumsticks frozen individually in their marinade) to supplement their meals when I know they just can’t face another tofu- or bean-centric dinner. I’m convinced having a no-brainer fall-back plan is what has made this undertaking sustainable. It reminds me of the way I became a regular runner — it didn’t happen because I forced myself to run every day. That would have lasted precisely one week. Instead I deliberately set the bar low — every other day — so I could only be the hero in my own story. That was 25 years ago and here I am, still racking up the miles on Strava. Slowly, but still. Here’s an A+ flexitarian dinner that I’ve called on a few times, loosely inspired by a sandwich I ate at Portland’s Eventide a few months ago. Three of the four of us are fine with a version where the smoky, golden-fried block of tofu gets a pickley-soy-sauce hit from the slaw. I mean, when I really think about it, it boggles my mind that anyone could not be fine with that. But what can you do? Instead of giving up on the whole thing, I just pan-fry a chicken thigh for the tofu-hater. I know it’s two separate dinners and that the meat-eater is eating a decidedly different meal from the non-meat eaters, but the front-end work is exactly the same, so it doesn’t actually feel like a defeat. And if it’s not defeat, it’s most definitely victory.'
},
{
    id: '1',
    title: 'Multitasking: Is It Good And Can You Actually Master It',
    author: 'Leon Ho',
    image: 'https://i.insider.com/58d5069bdd0895bf2a8b4ae8?width=750&format=jpeg&auto=webp',
    category: 'Self-Improvement',
    content: 'Multitasking skills are founded on a myth, according to cognitive neuroscientists and psychologists all across the world. Several types of research have been done to see how multitasking affects our brain. A study conducted to see if multitasking while driving was good or bad, concluded that performance is primarily reduced when there is a resource conflict. Another study was done on the performance of older adults vs. young ones when multitasking during the driving, and it concluded that the performance of older persons suffered more than that of young ones and that capability to multitask depleted with age. As per studies, the only time you can multitask is when you’re doing two things and one of them doesn’t require your attention or mental energy, for example jogging while listening to music. As per research,somewhat distracting activities such as listening to the radio can help improve the driving performance by providing a less distracting option. It concludes that you can multitask only when one of the two things doesn’t require your attention or mental energy. Just as in driving you don’t have to put in the additional effort or use mental energy to listen to music and so multitasking (driving and listening to music) is possible.'
}]

export const blogSlice = createSlice({
    name: 'blog',
    initialState,
    reducers:{
        addBlog: (state, action: PayloadAction<BlogState>) => {
            state.push(action.payload);
            localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(state));
        }
    }
})

export const { addBlog } = blogSlice.actions;

export default blogSlice.reducer;