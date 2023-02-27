import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { AuthService } from '../auth/auth.service';
import { DataStorageService } from '../shared/data-storage.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit, OnDestroy {
  isAuthenticated = false;
  private usersub!: Subscription;

  constructor(
    private dataStore: DataStorageService,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    this.usersub = this.authService.user.subscribe((user) => {
      this.isAuthenticated = !user ? false : true;
    });
  }

  onSaveData() {
    this.dataStore.storeData();
  }

  onFetchData() {
    this.dataStore.fetchData().subscribe();
  }

  ngOnDestroy(): void {
    this.usersub.unsubscribe();
  }
}
