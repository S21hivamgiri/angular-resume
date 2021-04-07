import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HorzTabComponent } from './horz-tab/horz-tab.component';
import { BandComponent } from './band/band.component';
import { SideJumpMenuComponent } from './side-jump-menu/side-jump-menu.component';
import { HomeLookComponent } from './home-look/home-look.component';
import { FooterComponent } from './footer/footer.component';
import { DropdownComboComponent } from './dropdown-combo/dropdown-combo.component';
import { EmbedComponent } from './embed/embed.component';
import { TimelineComponent } from './timeline/timeline.component';
import { CorouselComponent } from './corousel/corousel.component';
import { HorizontalChartComponent } from './horizontal-chart/horizontal-chart.component';
import { ListCardsComponent } from './list-cards/list-cards.component';
import { ListAccordionComponent } from './list-accordion/list-accordion.component';
import { ExpandedCardComponent } from './expanded-card/expanded-card.component';
import { ProgressCardComponent } from './progress-card/progress-card.component';
import { SkillImgComponent } from './skill-img/skill-img.component';
import { MoreButtonComponent } from './more-button/more-button.component';
import { TitleBarComponent } from './title-bar/title-bar.component';
import { HeaderComponent } from './header/header.component';
import { SkillComponent } from './skill/skill.component';
import { HeaderIconComponent } from './header-icon/header-icon.component';

@NgModule({
  declarations: [
    AppComponent,
    HorzTabComponent,
    BandComponent,
    SideJumpMenuComponent,
    HomeLookComponent,
    FooterComponent,
    DropdownComboComponent,
    EmbedComponent,
    TimelineComponent,
    CorouselComponent,
    HorizontalChartComponent,
    ListCardsComponent,
    ListAccordionComponent,
    ExpandedCardComponent,
    ProgressCardComponent,
    SkillImgComponent,
    MoreButtonComponent,
    TitleBarComponent,
    HeaderComponent,
    SkillComponent,
    HeaderIconComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
