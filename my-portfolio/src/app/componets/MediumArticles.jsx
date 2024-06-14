import React from 'react'
import { useProfile } from 'medium-to-react';

export default function MediumArticles() {

    const {
        profile,
        loading,
        error
      } = useProfile('piyumikavindyappk');
      
  return (
    <div>
      
    </div>
  )
}
