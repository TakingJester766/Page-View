import React from 'react';
import ScrollableText from './ScrollableText';

function App() {
  const text = `
  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque et justo et ipsum fringilla malesuada vitae at nunc. Vivamus scelerisque accumsan faucibus. Maecenas sit amet ex dui. Etiam feugiat lacinia ornare. Etiam ac mattis elit. Donec a ante et neque suscipit scelerisque. Praesent turpis ipsum, consectetur ut dui vitae, volutpat mattis ex. Nullam aliquet lacus vel risus euismod, ullamcorper vulputate quam malesuada. Etiam euismod tempus turpis. Nam non risus dignissim, congue eros in, suscipit dolor. Fusce lobortis, purus in accumsan euismod, sem tellus rhoncus purus, feugiat condimentum est ante nec ligula. Sed cursus est egestas odio ornare, at convallis ipsum hendrerit. Nam enim mi, pellentesque a tempus id, aliquam nec felis. Donec vel congue orci.
  
  Ut lacinia ultricies maximus. Donec a volutpat urna. Nam vestibulum tincidunt congue. Mauris eget lorem nunc. Morbi id velit sed augue vestibulum iaculis. Proin non massa a odio convallis imperdiet. Integer blandit congue arcu, eu tempor est gravida nec. Donec ut velit ut velit tincidunt luctus vitae sit amet neque. Morbi sodales tempus mi, vitae imperdiet diam viverra et. Nam ante diam, blandit sit amet maximus nec, vulputate in nibh. Aenean feugiat sapien sit amet erat tempus, eu lobortis tellus sodales.
  
  Vivamus nec dictum nibh, vel bibendum magna. Curabitur condimentum justo ac neque placerat, sit amet accumsan orci fermentum. Aliquam sed urna non eros feugiat fringilla. Vestibulum vel iaculis diam. Interdum et malesuada fames ac ante ipsum primis in faucibus. Morbi pretium augue tortor, in accumsan diam semper nec. Sed ac tincidunt tellus. Vivamus lobortis dui ut faucibus ultricies. Aliquam at consequat ipsum. Fusce vel mollis diam. Ut id dolor suscipit, iaculis est at, malesuada dui. Sed fringilla diam purus, a commodo augue pretium eget. Fusce blandit ut ante sed mollis. Nulla non porttitor urna. Curabitur sed varius nunc, id elementum justo.
  
  Etiam commodo finibus risus ut lobortis. Donec ac massa id dolor cursus gravida. Sed non sem id est tincidunt egestas. Aenean et aliquam est. Aenean ornare sit amet erat sed commodo. Morbi et tortor sit amet lacus tempor consectetur. Aenean ultrices libero ac tellus molestie, in maximus leo porttitor. Pellentesque scelerisque ante nec velit aliquam posuere. Donec varius id ligula sit amet facilisis. Maecenas purus metus, egestas et auctor non, sagittis vel tellus. Sed facilisis, urna ac interdum suscipit, massa diam vestibulum orci, eu pretium ex odio et sem. Curabitur tempor, mi nec luctus vestibulum, diam elit aliquam risus, ut vestibulum est ante at libero. Nunc auctor consequat leo.
  
  Aliquam eu mauris a elit tincidunt rutrum sed eget lacus. Ut faucibus laoreet mauris tempus feugiat. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Morbi in pretium ante. Morbi vel blandit dolor. Morbi volutpat libero et enim lobortis pharetra. Aliquam eget velit vel lacus gravida dignissim non a nibh. Phasellus dictum, quam eget sagittis scelerisque, tortor leo aliquam nunc, quis varius ipsum risus sed nisi. Quisque congue diam sed ipsum molestie bibendum. Praesent iaculis, urna et pretium suscipit, sem tortor dignissim neque, quis laoreet lorem elit id sem. Duis ullamcorper felis justo, id rhoncus sapien finibus nec. Quisque posuere velit mattis suscipit ornare. Ut molestie dignissim vestibulum. Nam at lectus bibendum, rhoncus orci ac, scelerisque ligula. Interdum et malesuada fames ac ante ipsum primis in faucibus.`;
  return (
    <div className="scroll-container">
      <ScrollableText text={text} />
    </div>
  );
}

export default App;
