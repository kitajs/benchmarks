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
* __Node:__ `v20.18.1`
* __Run:__ Mon Dec 02 2024 01:33:20 GMT+0000 (Coordinated Universal Time)
* __Method:__ `autocannon -c 100 -d 40 -p 10 localhost:3000` (two rounds; one to warm-up, one to measure)

|                          | Version  | Router | Requests/s | Latency (ms) | Throughput/Mb |
| :--                      | --:      | --:    | :-:        | --:          | --:           |
| bare                     | v20.18.1 | ✗      | 47527.2    | 20.52        | 8.48          |
| kita                     | 1.1.36   | ✓      | 46296.8    | 21.10        | 8.30          |
| polka                    | 0.5.2    | ✓      | 46126.4    | 21.22        | 8.23          |
| server-base-router       | 7.1.32   | ✓      | 45974.4    | 21.22        | 8.20          |
| rayo                     | 1.4.6    | ✓      | 45925.6    | 21.27        | 8.19          |
| fastify                  | 4.28.1   | ✓      | 45869.6    | 21.29        | 8.22          |
| 0http                    | 3.5.3    | ✓      | 45863.2    | 21.30        | 8.18          |
| connect                  | 3.7.0    | ✗      | 45617.6    | 21.40        | 8.13          |
| server-base              | 7.1.32   | ✗      | 45550.4    | 21.45        | 8.12          |
| polkadot                 | 1.0.0    | ✗      | 45308.0    | 21.58        | 8.08          |
| connect-router           | 1.3.8    | ✓      | 43148.8    | 22.68        | 7.70          |
| h3                       | 1.13.0   | ✗      | 42566.4    | 23.00        | 7.59          |
| h3-router                | 1.13.0   | ✓      | 41503.2    | 23.59        | 7.40          |
| hono                     | 4.6.12   | ✓      | 40244.8    | 24.35        | 7.18          |
| restana                  | 4.9.9    | ✓      | 39603.2    | 24.76        | 7.06          |
| koa                      | 2.15.3   | ✗      | 37111.2    | 26.45        | 6.62          |
| restify                  | 11.1.0   | ✓      | 34487.0    | 28.49        | 6.22          |
| take-five                | 2.0.0    | ✓      | 34415.2    | 28.56        | 12.37         |
| koa-isomorphic-router    | 1.0.1    | ✓      | 34215.4    | 28.71        | 6.10          |
| koa-router               | 12.0.1   | ✓      | 33274.2    | 29.56        | 5.93          |
| hapi                     | 21.3.12  | ✓      | 31610.8    | 31.13        | 5.64          |
| fastify-big-json         | 4.28.1   | ✓      | 11789.4    | 84.25        | 135.65        |
| express                  | 4.21.1   | ✓      | 10732.2    | 92.57        | 1.91          |
| express-with-middlewares | 4.21.1   | ✓      | 9798.5     | 101.45       | 3.64          |
| micro-route              | 2.5.0    | ✓      | N/A        | N/A          | N/A           |
| micro                    | 10.0.1   | ✗      | N/A        | N/A          | N/A           |
| microrouter              | 3.1.3    | ✓      | N/A        | N/A          | N/A           |
| trpc-router              | 10.45.2  | ✓      | N/A        | N/A          | N/A           |
