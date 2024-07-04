import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const guardGuard: CanActivateFn = (route, state) => {
  if (sessionStorage.getItem('email')) {
    return true;
  } else {
    const router = inject(Router);
    return router.navigate(['login']);
  }
};
