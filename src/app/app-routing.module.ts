import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {InfoComponent} from "./info/info.component";
import {GithubComponent} from "./github/github.component";

const routes: Routes = [
    {
        path: "",
        component: HomeComponent
    },
    {
        path: "info",
        component: InfoComponent
    },
    {
        path: "github",
        component: GithubComponent
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
