import { NgModule } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { StoreRouterConnectingModule, routerReducer } from '@ngrx/router-store';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

import { AppRoutingModule } from './app-routing.module';
import { AppMaterialModule } from './material.module';

import { environment } from '../environments/environment';
import { appReducer } from './redux/reducers/appReducer';
import { Lang } from 'src/app/models/language.model';
import { AppLanguageStore } from './services/language-store.service';

import { MainComponent } from './pages/main/main.component';
import { AuthorsListComponent } from './pages/authors-list/authors-list.component';
import { AuthorFullViewComponent } from './pages/author-full-view/author-full-view.component';
import { TeamComponent } from './pages/team/team.component';
import { WorklogComponent } from './pages/worklog/worklog.component';
import { Page404Component } from './pages/page404/page404.component';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { LanguagesComponent } from './components/languages/languages.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { SearchWidgetComponent } from './components/search-widget/search-widget.component';
import { AuthorOfDayComponent } from './components/author-of-day/author-of-day.component';
import { EvaluationComponent } from './components/evaluation/evaluation.component';
import { ScopeComponent } from './components/scope/scope.component';

// AoT requires an exported function for factories
export function HttpLoaderFactory(http: HttpClient): TranslateHttpLoader {
  return new TranslateHttpLoader(http);
}

const lang = AppLanguageStore.loadLocale();

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MainComponent,
    NavigationComponent,
    AuthorsListComponent,
    AuthorFullViewComponent,
    TeamComponent,
    WorklogComponent,
    Page404Component,
    LanguagesComponent,
    SearchWidgetComponent,
    AuthorOfDayComponent,
    EvaluationComponent,
    ScopeComponent,
    SidenavComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AppMaterialModule,
    BrowserAnimationsModule,
    HttpClientModule,
    StoreModule.forRoot({
      appReducer,
      router: routerReducer,
    }),
    EffectsModule.forRoot([]),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production,
    }),
    StoreRouterConnectingModule.forRoot(),
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient],
      },
      defaultLanguage: lang || Lang.en,
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
