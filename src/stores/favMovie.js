
import { defineStore } from 'pinia'

export const useFav = defineStore('favMovie',{
    state: () => ({
        FavList : JSON.parse(localStorage.getItem('fav')) || []
    }),
    actions: {
        persist(){
            localStorage.setItem('fav',JSON.stringify(this.FavList))
        },
        toggle(id){
            const indexFav = this.FavList.indexOf(id);
            if(indexFav > -1) {
                this.FavList.splice(indexFav,1);
                this.persist()
            } else {
                this.FavList.push(id);
                this.persist();
            }
        },
        isInFav(id){
           return this.FavList.indexOf(id) > -1
        }
    }
})