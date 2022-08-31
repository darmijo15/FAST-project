import { 
    provideFASTDesignSystem, 
    fastButton
  } from '@microsoft/fast-components';
  
  provideFASTDesignSystem()
      .register(
          fastButton()
      );
import './style.css';

console.log('test');