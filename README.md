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
* __Node:__ `v20.19.5`
* __Run:__ Mon Nov 03 2025 01:37:23 GMT+0000 (Coordinated Universal Time)
* __Method:__ `autocannon -c 100 -d 40 -p 10 localhost:3000` (two rounds; one to warm-up, one to measure)

|                          | Version  | Router | Requests/s | Latency (ms) | Throughput/Mb |
| :--                      | --:      | --:    | :-:        | --:          | --:           |
| bare                     | v20.19.5 | ✗      | 47080.8    | 20.73        | 8.40          |
| polka                    | 0.5.2    | ✓      | 47063.2    | 20.76        | 8.39          |
| kita                     | 1.1.36   | ✓      | 46444.0    | 21.02        | 8.33          |
| server-base              | 7.1.32   | ✗      | 46096.0    | 21.19        | 8.22          |
| fastify                  | 4.29.1   | ✓      | 45906.4    | 21.28        | 8.23          |
| connect                  | 3.7.0    | ✗      | 45903.2    | 21.28        | 8.19          |
| rayo                     | 1.4.6    | ✓      | 45864.8    | 21.30        | 8.18          |
| server-base-router       | 7.1.32   | ✓      | 45714.4    | 21.36        | 8.15          |
| polkadot                 | 1.0.0    | ✗      | 45235.2    | 21.61        | 8.07          |
| 0http                    | 3.5.3    | ✓      | 44718.4    | 21.87        | 7.98          |
| connect-router           | 1.3.8    | ✓      | 42284.8    | 23.15        | 7.54          |
| h3-router                | 1.15.4   | ✓      | 41832.8    | 23.41        | 7.46          |
| h3                       | 1.15.4   | ✗      | 41100.0    | 23.84        | 7.33          |
| restana                  | 4.9.9    | ✓      | 39199.2    | 25.01        | 6.99          |
| hono                     | 4.10.4   | ✓      | 37611.2    | 26.08        | 6.17          |
| koa                      | 2.16.3   | ✗      | 36579.8    | 26.83        | 6.52          |
| take-five                | 2.0.0    | ✓      | 35587.8    | 27.59        | 12.80         |
| koa-isomorphic-router    | 1.0.1    | ✓      | 35159.8    | 27.94        | 6.27          |
| restify                  | 11.1.0   | ✓      | 34870.6    | 28.18        | 6.29          |
| koa-router               | 12.0.1   | ✓      | 33498.4    | 29.35        | 5.97          |
| hapi                     | 21.4.3   | ✓      | 31628.0    | 31.11        | 5.64          |
| fastify-big-json         | 4.29.1   | ✓      | 11840.2    | 83.90        | 136.23        |
| express                  | 4.21.2   | ✓      | 10806.6    | 91.94        | 1.93          |
| express-with-middlewares | 4.21.2   | ✓      | 10180.4    | 97.63        | 3.79          |
| micro-route              | 2.5.0    | ✓      | N/A        | N/A          | N/A           |
| micro                    | 10.0.1   | ✗      | N/A        | N/A          | N/A           |
| microrouter              | 3.1.3    | ✓      | N/A        | N/A          | N/A           |
| trpc-router              | 10.45.2  | ✓      | N/A        | N/A          | N/A           |
