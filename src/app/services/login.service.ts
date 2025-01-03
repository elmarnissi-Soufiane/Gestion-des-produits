import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { isPlatformBrowser } from '@angular/common';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  private jsonUrl = 'http://localhost:3000/users'; // URL du fichier JSON ou API pour login

  constructor(private http: HttpClient, @Inject(PLATFORM_ID) private platformId: Object) { }

  login(email: string, password: string): Observable<string | null> {
    return this.http.get<any[]>(this.jsonUrl).pipe( // Nous attendons directement un tableau d'utilisateurs
      map((users) => {
        console.log('API response:', users);  // Affichez les données de l'API
        if (!users || users.length === 0) {
          throw new Error('No users data found');
        }

        const user = users.find(
          (u) => u.email === email && u.password === password
        );
        console.log('User found:', user); // Affichez l'utilisateur trouvé
        return user ? user.token : null;
      }),
      catchError((error) => {
        console.error('Error during login:', error);  // Affichez l'erreur
        return of(null); // Retourne null si l'API échoue
      }),
      tap((token) => {
        if (token) {
          localStorage.setItem('token', token);
        }
      })
    );
  }

  logout(): void {
    if (isPlatformBrowser(this.platformId)) {
      // Vérifie que nous sommes dans le navigateur avant de supprimer l'élément
      localStorage.removeItem('token');
    }
  }
}

