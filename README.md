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
* __Node:__ `v20.18.2`
* __Run:__ Mon Feb 24 2025 01:30:01 GMT+0000 (Coordinated Universal Time)
* __Method:__ `autocannon -c 100 -d 40 -p 10 localhost:3000` (two rounds; one to warm-up, one to measure)

|                          | Version  | Router | Requests/s | Latency (ms) | Throughput/Mb |
| :--                      | --:      | --:    | :-:        | --:          | --:           |
| bare                     | v20.18.2 | ✗      | 48362.4    | 20.19        | 8.62          |
| polka                    | 0.5.2    | ✓      | 47636.0    | 20.49        | 8.50          |
| kita                     | 1.1.36   | ✓      | 47634.4    | 20.49        | 8.54          |
| fastify                  | 4.29.0   | ✓      | 47520.8    | 20.54        | 8.52          |
| connect                  | 3.7.0    | ✗      | 46634.4    | 20.92        | 8.32          |
| rayo                     | 1.4.6    | ✓      | 46605.6    | 20.94        | 8.31          |
| 0http                    | 3.5.3    | ✓      | 46528.8    | 21.01        | 8.30          |
| polkadot                 | 1.0.0    | ✗      | 46380.0    | 21.07        | 8.27          |
| server-base              | 7.1.32   | ✗      | 46108.0    | 21.17        | 8.22          |
| server-base-router       | 7.1.32   | ✓      | 45910.4    | 21.28        | 8.19          |
| connect-router           | 1.3.8    | ✓      | 43719.2    | 22.36        | 7.80          |
| h3                       | 1.15.1   | ✗      | 43520.8    | 22.47        | 7.76          |
| restana                  | 4.9.9    | ✓      | 41689.6    | 23.49        | 7.44          |
| h3-router                | 1.15.1   | ✓      | 41593.6    | 23.55        | 7.42          |
| hono                     | 4.7.2    | ✓      | 40884.8    | 23.96        | 6.71          |
| koa                      | 2.15.4   | ✗      | 37326.4    | 26.28        | 6.66          |
| koa-isomorphic-router    | 1.0.1    | ✓      | 36120.6    | 27.18        | 6.44          |
| take-five                | 2.0.0    | ✓      | 35555.0    | 27.61        | 12.78         |
| restify                  | 11.1.0   | ✓      | 35466.2    | 27.68        | 6.39          |
| koa-router               | 12.0.1   | ✓      | 33859.8    | 29.04        | 6.04          |
| hapi                     | 21.3.12  | ✓      | 32210.4    | 30.54        | 5.74          |
| fastify-big-json         | 4.29.0   | ✓      | 11944.0    | 83.16        | 137.42        |
| express                  | 4.21.2   | ✓      | 11513.4    | 86.28        | 2.05          |
| express-with-middlewares | 4.21.2   | ✓      | 10645.6    | 93.36        | 3.96          |
| micro-route              | 2.5.0    | ✓      | N/A        | N/A          | N/A           |
| micro                    | 10.0.1   | ✗      | N/A        | N/A          | N/A           |
| microrouter              | 3.1.3    | ✓      | N/A        | N/A          | N/A           |
| trpc-router              | 10.45.2  | ✓      | N/A        | N/A          | N/A           |
