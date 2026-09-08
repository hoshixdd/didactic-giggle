import React, {useEffect, useRef, useState} from 'react';
import {content} from './content';

export const chapterNames = ['The beginning', 'Little things', 'Our memories', 'The letter', 'One question', 'Always'];
const ids = ['opening','reasons','memories','letter','question','closing'];
const songId=content.music?.youtubeId || 'P_APic96jvE';

// Native dialogs provide focus trapping, Escape dismissal and a real modal
// surface on iOS/Android without a second UI framework.
export function Dialog({open,onClose,title,children,className=''}) {
  const ref=useRef();
  useEffect(()=>{const el=ref.current;if(open&&!el.open)el.showModal();else if(!open&&el.open)el.close();},[open]);
  useEffect(()=>{if(!open)return;const previous=document.body.style.overflow;document.body.style.overflow='hidden';return()=>{document.body.style.overflow=previous};},[open]);
  return <dialog ref={ref} className={`experience-dialog ${className}`} onCancel={onClose} onClose={onClose} onClick={e=>{if(e.target===e.currentTarget)onClose()}} aria-label={title} data-lenis-prevent>
    <div className="dialog-inner"><div className="dialog-heading"><span>{title}</span><button autoFocus className="icon-button" onClick={onClose} aria-label="Close dialog">×</button></div>{children}</div>
  </dialog>;
}

export function ReadingRoom(){
  const [open,setOpen]=useState(false),[large,setLarge]=useState(false);
  return <><button className="reading-trigger" onClick={()=>setOpen(true)}><span>↗</span> Just you & the words <small>OPEN READING MODE</small></button>
    <Dialog open={open} onClose={()=>setOpen(false)} title="A quiet place to read" className="reading-dialog">
      <button className="text-size" aria-pressed={large} onClick={()=>setLarge(!large)}>Aa <span>{large?'Standard text':'Larger text'}</span></button>
      <article className={`reader-letter ${large?'large-text':''}`}><p className="eyebrow">A LITTLE INFINITY</p><h2>My dear {content.to},</h2>{content.letter.map(p=><p key={p}>{p}</p>)}<p className="handwritten">{content.letterAccent}</p><p>Yours, in all the little ways.<br/><span className="handwritten">{content.from}</span></p></article>
    </Dialog></>;
}

export function PhotoView({src,label,children}){
  const [open,setOpen]=useState(false),[failed,setFailed]=useState(false);
  useEffect(()=>setFailed(false),[src]);
  if(!src||failed)return children;
  return <><button className="photo-open" onClick={()=>setOpen(true)} aria-label={`Enlarge photo: ${label}`}><img src={src} alt={label} loading="lazy" decoding="async" onError={()=>setFailed(true)}/><span aria-hidden="true">↗</span></button><Dialog open={open} onClose={()=>setOpen(false)} title={label} className="photo-dialog"><img src={src} alt={label}/></Dialog></>;
}

export function MusicPlayer({open,onClose}){
  const [started,setStarted]=useState(false);
  useEffect(()=>{if(!open)setStarted(false)},[open]);
  if(!open)return null;
  // Keep the YouTube player visible, including its own pause/volume controls.
  // Closing unmounts the iframe and stops playback. No downloaded song files.
  return <aside className="music-panel" aria-label="Our soundtrack" data-lenis-prevent>
    <div className="music-heading"><span className="record-icon" aria-hidden="true">♫</span><div><p>A Piece of You</p><small>Nathaniel Constantin</small></div><button className="icon-button" onClick={onClose} aria-label="Close player and stop music">×</button></div>
    {started?<iframe title="A Piece of You — YouTube music player" src={`https://www.youtube-nocookie.com/embed/${songId}?autoplay=1&playsinline=1&rel=0&loop=1&playlist=${songId}`} allow="autoplay; encrypted-media; picture-in-picture; fullscreen" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen/>:<button className="music-start" onClick={()=>setStarted(true)}><span>▶</span><strong>A soundtrack for us.</strong><small>TAP TO LOAD & PLAY</small></button>}
    <a href={`https://www.youtube.com/watch?v=${songId}`} target="_blank" rel="noopener noreferrer">{started?'If playback is unavailable, open YouTube':'Listen on YouTube'} <span>↗</span></a>
  </aside>;
}

export function StoryControls({act,calm,systemReduced,onCalm,musicOpen,onMusic}){
  const [menu,setMenu]=useState(false);
  return <><nav className="story-dock" aria-label="Story controls"><button onClick={()=>setMenu(true)} aria-label={`Open chapters. Current chapter: ${chapterNames[act]}`}><span className="dock-count">0{act+1}<small>/06</small></span><span className="dock-title">{chapterNames[act]}<small>EXPLORE THE CHAPTERS</small></span><span>⌃</span></button><button className={musicOpen?'selected':''} onClick={onMusic} aria-expanded={musicOpen} aria-label={musicOpen?'Close song player':'Open song player'}>♫</button></nav>
    <Dialog open={menu} onClose={()=>setMenu(false)} title="Every little chapter" className="chapters-dialog"><p className="menu-intro">Take your time.<br/><i>This is for you.</i></p><div className="chapter-list">{ids.map((id,i)=><a key={id} href={'#'+id} onClick={()=>setMenu(false)} aria-current={act===i?'location':undefined}><span>0{i+1}</span>{chapterNames[i]}<span>{act===i?'♡':'↗'}</span></a>)}</div><button className="calm-toggle" aria-pressed={calm} disabled={systemReduced} onClick={onCalm}><span>Gentle mode<small>{systemReduced?'Enabled by your device’s motion preference.':'Less movement. The same feeling.'}</small></span><span className={`switch ${calm?'on':''}`} aria-hidden="true"/></button></Dialog>
  </>;
}
