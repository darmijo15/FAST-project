import { 
    provideFASTDesignSystem, 
    fastAnchor, 
    fastButton
  } from '@microsoft/fast-components';
  
  provideFASTDesignSystem()
      .register(
          fastAnchor(),
          fastButton()
      );
import './style.css';
