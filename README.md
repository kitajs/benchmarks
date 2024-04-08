<div align="center">
  <img src="https://github.com/fastify/graphics/raw/HEAD/fastify-landscape-outlined.svg" width="650" height="auto"/>
</div>

<div align="center">

[![CI](https://github.com/fastify/fastify/workflows/ci/badge.svg)](https://github.com/fastify/fastify/actions/workflows/ci.yml)
[![Coverage Status](https://coveralls.io/repos/github/fastify/fastify/badge.svg?branch=master)](https://coveralls.io/github/fastify/fastify?branch=master)
[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat)](http://standardjs.com/)
[![NPM version](https://img.shields.io/npm/v/fastify.svg?style=flat)](https://www.npmjs.com/package/fastify)
[![NPM downloads](https://img.shields.io/npm/dm/fastify.svg?style=flat)](https://www.npmjs.com/package/fastify) [![Discord](https://img.shields.io/discord/725613461949906985)](https://discord.gg/fastify)

</div>
<br />

# TL;DR

* [Fastify](https://github.com/fastify/fastify) is a fast and low overhead web framework for Node.js.
* This package shows how fast it is comparatively.
* For metrics (cold-start) see [metrics.md](./METRICS.md)

# Requirements

To be included in this list, the framework should captivate users' interest. We have identified the following minimal requirements:
- **Ensure active usage**: a minimum of 500 downloads per week
- **Maintain an active repository** with at least one event (comment, issue, PR) in the last month
- The framework must use the **Node.js** HTTP module

# Usage

Clone this repo. Then 

```
node ./benchmark [arguments (optional)]
```

#### Arguments

* `-h`: Help on how to use the tool.
* `compare`: Get comparative data for your benchmarks.

> You may also compare all test results, at once, in a single table; `benchmark compare -t`

> You can also extend the comparison table with percentage values based on fastest result; `benchmark compare -p`
# Benchmarks

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Node:__ `v20.12.0`
* __Run:__ Mon Apr 08 2024 01:16:43 GMT+0000 (Coordinated Universal Time)
* __Method:__ `autocannon -c 100 -d 40 -p 10 localhost:3000` (two rounds; one to warm-up, one to measure)

|                          | Version  | Router | Requests/s | Latency (ms) | Throughput/Mb |
| :--                      | --:      | --:    | :-:        | --:          | --:           |
| kita                     | 1.1.36   | ✓      | 47480.8    | 20.55        | 8.51          |
| bare                     | v20.12.0 | ✗      | 46103.2    | 21.19        | 8.22          |
| polkadot                 | 1.0.0    | ✗      | 46044.0    | 21.22        | 8.21          |
| fastify                  | 4.26.2   | ✓      | 45558.4    | 21.43        | 8.17          |
| rayo                     | 1.4.6    | ✓      | 45277.6    | 21.59        | 8.08          |
| polka                    | 0.5.2    | ✓      | 44964.8    | 21.80        | 8.02          |
| connect                  | 3.7.0    | ✗      | 44942.4    | 21.76        | 8.01          |
| server-base              | 7.1.32   | ✗      | 44591.2    | 21.94        | 7.95          |
| server-base-router       | 7.1.32   | ✓      | 44314.4    | 22.06        | 7.90          |
| h3                       | 1.11.1   | ✗      | 43688.8    | 22.39        | 7.79          |
| 0http                    | 3.5.3    | ✓      | 43238.4    | 22.64        | 7.71          |
| connect-router           | 1.3.8    | ✓      | 42644.8    | 22.94        | 7.61          |
| h3-router                | 1.11.1   | ✓      | 42192.8    | 23.21        | 7.52          |
| hono                     | 4.2.2    | ✓      | 39255.2    | 24.97        | 7.00          |
| restana                  | 4.9.9    | ✓      | 39128.0    | 25.06        | 6.98          |
| koa                      | 2.15.2   | ✗      | 36773.8    | 26.68        | 6.56          |
| koa-isomorphic-router    | 1.0.1    | ✓      | 34591.4    | 28.41        | 6.17          |
| take-five                | 2.0.0    | ✓      | 34225.8    | 28.71        | 12.31         |
| restify                  | 11.1.0   | ✓      | 33992.2    | 28.91        | 6.13          |
| koa-router               | 12.0.1   | ✓      | 33539.0    | 29.33        | 5.98          |
| hapi                     | 21.3.8   | ✓      | 30703.8    | 32.07        | 5.48          |
| fastify-big-json         | 4.26.2   | ✓      | 11614.4    | 85.55        | 133.64        |
| express                  | 4.19.2   | ✓      | 10688.6    | 92.98        | 1.91          |
| express-with-middlewares | 4.19.2   | ✓      | 10040.6    | 99.00        | 3.73          |
| micro-route              | 2.5.0    | ✓      | N/A        | N/A          | N/A           |
| micro                    | 10.0.1   | ✗      | N/A        | N/A          | N/A           |
| microrouter              | 3.1.3    | ✓      | N/A        | N/A          | N/A           |
| trpc-router              | 10.45.2  | ✓      | N/A        | N/A          | N/A           |
