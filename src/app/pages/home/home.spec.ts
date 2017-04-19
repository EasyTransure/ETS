import { NavController } from 'ionic-angular';
import { Home } from '../pages';

describe('Page: home', () => {
    let component: Home;
    let navController: NavController;

    beforeEach(() => {
        component = new Home( navController );
    });

    describe('ion view will enter', () => {
        it('should set the root page', () => {
            component.ionViewWillEnter();
        });
    });
})
