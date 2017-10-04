## Functions

<dl>
<dt><a href="#config">config(userOpts)</a> ⇒ <code>void</code></dt>
<dd><p>config - Accepts a config object to adjust default settings.</p>
</dd>
<dt><a href="#start">start()</a> ⇒ <code>number</code></dt>
<dd><p>start - Starts a new timer and returns the absolute start time.</p>
</dd>
<dt><a href="#stop">stop()</a> ⇒ <code>number</code></dt>
<dd><p>stop - Stops the current timer and returns the absolute end time.</p>
</dd>
<dt><a href="#diff">diff(nsStartTime, nsEndTime)</a> ⇒ <code>number</code></dt>
<dd><p>diff - Accepts a start &amp; end time in nanoseconds and returns the difference.</p>
</dd>
<dt><a href="#stopAndDiff">stopAndDiff(message)</a> ⇒ <code>number</code></dt>
<dd><p>stopAndDiff - Combines stop() &amp; diff().
If <code>opts.shouldPrint</code> is set, the diff is logged to the console
with <code>message</code> or <code>opts.defaultMessage</code> (if specified).</p>
</dd>
<dt><a href="#stopAndRestart">stopAndRestart()</a> ⇒ <code>number</code></dt>
<dd><p>stopAndRestart - Stops timer, starts a new one and returns the nanosecond
diff of the stopped timer.</p>
</dd>
</dl>

<a name="config"></a>

## config(userOpts) ⇒ <code>void</code>
config - Accepts a config object to adjust default settings.

**Kind**: global function  

| Param | Type |
| --- | --- |
| userOpts | <code>object</code> | 

<a name="start"></a>

## start() ⇒ <code>number</code>
start - Starts a new timer and returns the absolute start time.

**Kind**: global function  
**Returns**: <code>number</code> - nsStartTime  
<a name="stop"></a>

## stop() ⇒ <code>number</code>
stop - Stops the current timer and returns the absolute end time.

**Kind**: global function  
**Returns**: <code>number</code> - nsEndTime  
<a name="diff"></a>

## diff(nsStartTime, nsEndTime) ⇒ <code>number</code>
diff - Accepts a start & end time in nanoseconds and returns the difference.

**Kind**: global function  
**Returns**: <code>number</code> - nsDiff  

| Param | Type |
| --- | --- |
| nsStartTime | <code>number</code> | 
| nsEndTime | <code>number</code> | 

<a name="stopAndDiff"></a>

## stopAndDiff(message) ⇒ <code>number</code>
stopAndDiff - Combines stop() & diff().
If `opts.shouldPrint` is set, the diff is logged to the console
with `message` or `opts.defaultMessage` (if specified).

**Kind**: global function  
**Returns**: <code>number</code> - nsDiff  

| Param | Type | Description |
| --- | --- | --- |
| message | <code>string</code> | Optional message for logging. |

<a name="stopAndRestart"></a>

## stopAndRestart() ⇒ <code>number</code>
stopAndRestart - Stops timer, starts a new one and returns the nanosecond
diff of the stopped timer.

**Kind**: global function  
**Returns**: <code>number</code> - nsDiff  
