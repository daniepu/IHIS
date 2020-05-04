import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AngularFireModule} from 'angularfire2';
import {AngularFireDatabaseModule, AngularFireDatabase} from 'angularfire2/database';
import { AngularFireAuthModule} from 'angularfire2/auth';
import { environment} from '../environments/environment';
import {FormsModule} from '@angular/forms';
import {FlashMessagesModule} from 'angular2-flash-messages';

import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatSidenavModule} from '@angular/material/sidenav';


import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { LoginComponent } from './components/login/login.component';
import { StuffFormComponent } from './components/stuff-form/stuff-form.component';
import { StuffSidebarComponent } from './components/stuff-sidebar/stuff-sidebar.component';
import { UsersComponent } from './components/users/users.component';

import { UserService } from './services/user.service';
import { AuthService } from './services/auth.service';
import {ClockServiceService} from './services/clock-service.service'
import { SettingsService } from './services/settings.service';
import { ChatService } from './services/chat.service';

import { AddUserComponent } from './components/add-user/add-user.component';
import { UserDetailsComponent } from './components/user-details/user-details.component';
import { EditUserComponent } from './components/edit-user/edit-user.component';
import { AuthGuard } from './guards/auth.guarde';
import { ClockComponent } from './components/clock/clock.component';
import { SettingsComponent } from './components/settings/settings.component';
import { PagenotfoundComponent } from './components/pagenotfound/pagenotfound.component';

import { PatientComponent } from './components/patient/patient.component';
import { ChatComponent } from './components/chat/chat.component';
import { ChatFormComponent } from './components/chat-form/chat-form.component';
import { FeedComponent } from './components/feed/feed.component';
import { MessageComponent } from './components/message/message.component';
import { ChatListComponent } from './components/chat-list/chat-list.component';
import { MatToolbar } from '@angular/material';

// routes
const appRoutes: Routes = [
  {path: 'stuff', component: StuffFormComponent, canActivate:[AuthGuard]},
  {path: '' , component: LoginComponent},
  {path: 'add-user', component: AddUserComponent, canActivate:[AuthGuard]},
  {path: 'user/:id', component:UserDetailsComponent, canActivate:[AuthGuard]},
  {path: 'edit-user/:id', component:EditUserComponent, canActivate:[AuthGuard]},
  {path: 'settings', component: SettingsComponent, canActivate:[AuthGuard]},
  {path: 'patient', component:PatientComponent},
  {path: 'chat/:id', component:ChatComponent,canActivate:[AuthGuard]},
  {path: '**', component: PagenotfoundComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    StuffFormComponent,
    StuffSidebarComponent,
    UsersComponent,
    AddUserComponent,
    UserDetailsComponent,
    EditUserComponent,
    ClockComponent,
    SettingsComponent,
    PagenotfoundComponent,
    PatientComponent,
    ChatComponent,
    ChatFormComponent,
    FeedComponent,
    MessageComponent,
    ChatListComponent,
    
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(appRoutes),
    AngularFireModule.initializeApp(environment.firebase,'IHIS'),
    AngularFireAuthModule,
    FormsModule,
    MatCheckboxModule,
    MatSidenavModule,
    FlashMessagesModule.forRoot(),
    
  ],
  providers: [
    AngularFireDatabase,
    AngularFireDatabaseModule,
    UserService,
    AuthService,
    ClockServiceService,
    AuthGuard,
    SettingsService,
    ChatService,

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
